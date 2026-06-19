import { ChangeEvent } from "react";
import { Field, FieldProps, FormikProps } from "formik";
import { IoIosClose } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";

interface FileProps {
  name: string;
  label: string;
}

interface FileFormValues {
  [key: string]: File | string | null | undefined;
}

function FileUpload({ name, label }: FileProps) {
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: FieldProps["field"],
    form: FormikProps<FileFormValues>,
  ): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      form.setFieldError(name, "فقط فایل‌های JPEG و PNG مجاز هستند");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      form.setFieldError(name, "اندازه فایل نباید بیشتر از ۲ مگابایت باشد");
      return;
    }

    form.setFieldValue(name, file);
    form.setFieldError(name, undefined);

    const reader = new FileReader();
    reader.onload = () => {
      form.setFieldValue(`${name}_preview`, reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <Field name={name}>
        {({ field, form }: FieldProps<File | null, FileFormValues>) => (
          <div className="space-y-3">
            {!form.values[`${name}_preview`] ? (
              <label
                htmlFor={name}
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <FiUploadCloud className="text-3xl text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">
                  برای آپلود کلیک کنید
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  PNG، JPEG — حداکثر ۲ مگابایت
                </span>
                <input
                  type="file"
                  id={name}
                  className="hidden"
                  onChange={(e) => handleFileChange(e, field, form)}
                  accept="image/jpeg,image/png"
                />
              </label>
            ) : (
              <div className="relative right-40 w-52 h-28 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={form.values[`${name}_preview`] as string}
                  alt="پیش‌نمایش"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    form.setFieldValue(name, null);
                    form.setFieldValue(`${name}_preview`, null);
                  }}
                  className="absolute top-1 left-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 transition-all"
                >
                  <IoIosClose className="text-sm" />
                </button>
              </div>
            )}

            {form.errors[name] && form.touched[name] && (
              <p className="text-red-500 text-xs">
                {form.errors[name] as string}
              </p>
            )}
          </div>
        )}
      </Field>{" "}
      {/* ← FastField نه! */}
    </div>
  );
}

export default FileUpload;
