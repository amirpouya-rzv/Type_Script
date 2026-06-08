import React from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { Formik, Form, FastField, ErrorMessage, FieldProps, FormikValues } from "formik";
import axios from "axios";

interface BasicDemoProps {
  name: string;
  label?: string;
  placeholder?: string;
  initialValues?: FormikValues;
}

export default function BasicDemo({
  name,
  label,
  placeholder,
  initialValues,
}: BasicDemoProps) {
  const sendEssay = (): void => {
    axios
      .post(`https://mockapi.io/projects/67c352611851890165aec600`)
      .then((_res) => {})
      .catch((_err) => {});
  };

  return (
    <Formik
      initialValues={initialValues ?? { [name]: "" }}
      onSubmit={(_values: FormikValues) => {}}
    >
      {({ values, errors }) => (
        <Form className="p-4 space-y-3">
          {label && (
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}

          <FastField name={name}>
            {({ field, form }: FieldProps<string>) => (
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Editor
                  value={field.value || ""}
                  onTextChange={(e: EditorTextChangeEvent) =>
                    form.setFieldValue(name, e.htmlValue)
                  }
                  placeholder={placeholder}
                  style={{ height: "320px" }}
                />
              </div>
            )}
          </FastField>

          <ErrorMessage
            name={name}
            render={(msg) => (
              <p className="text-sm text-red-500 mt-1">{msg}</p>
            )}
          />

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              onClick={sendEssay}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              ارسال
            </button>
            <button
              type="reset"
              className="px-5 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors"
            >
              پاک کردن
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}