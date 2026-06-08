import React, { ChangeEvent } from "react";
import { ErrorMessage, FastField, FieldProps, FormikProps } from "formik";

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
    form: FormikProps<FileFormValues>
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
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField name={name}>
        {({ field, form }: FieldProps<File | null, FileFormValues>) => (
          <div>
            <input
              type="file"
              id={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFileChange(e, field, form)
              }
              accept="image/jpeg,image/png"
            />
            {form.values[`${name}_preview`] && (
              <img
                src={form.values[`${name}_preview`] as string}
                alt="پیش‌نمایش"
                className="mt-2 w-24 h-24 object-cover rounded"
              />
            )}
            {form.values[name] && (
              <button
                type="button"
                onClick={() => {
                  form.setFieldValue(name, null);
                  form.setFieldValue(`${name}_preview`, null);
                }}
                className="text-red-500 text-xs mt-2"
              >
                حذف فایل
              </button>
            )}
            {form.errors[name] && form.touched[name] && (
              <div className="text-red-500 text-xs mt-1">
                {form.errors[name] as string}
              </div>
            )}
          </div>
        )}
      </FastField>
      <ErrorMessage name={name} />
    </div>
  );
}

export default FileUpload;