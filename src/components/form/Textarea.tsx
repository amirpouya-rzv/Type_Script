import { ErrorMessage, FastField, FieldInputProps, FieldMetaProps } from "formik";
import React from "react";

interface TextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

function Textarea({ name, label, placeholder, rows = 4 }: TextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-2">
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
          <textarea
            {...field}
            id={name}
            rows={rows}
            placeholder={placeholder}
            value={field.value ?? ""}
            className={`flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 ${
              meta.touched && meta.error
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
        )}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
      />
    </div>
  );
}

export default Textarea;