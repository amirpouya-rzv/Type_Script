import { ErrorMessage, FastField, FieldMetaProps, FieldInputProps } from "formik";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
}

function Input({ name, label, type }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block dark:text-white text-gray-700 mb-2">
        {label}
      </label>

      <FastField name={name}>
        {({
          field,
          meta,
        }: {
          field: FieldInputProps<string>;
          meta: FieldMetaProps<string>;
        }) => (
          <input
            {...field}
            id={name}
            type={type}
            value={field.value ?? ""}
            className={`w-full px-4 py-2 border rounded ${
              meta.touched && meta.error
                ? "border-light_red"
                : "border-gray-300"
            }`}
          />
        )}
      </FastField>

      <ErrorMessage
        name={name}
        component="div"
        className="text-light_red text-sm mt-1"
      />
    </div>
  );
}

export default Input;