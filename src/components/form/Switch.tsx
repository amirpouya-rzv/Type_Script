import React from "react";
import { ErrorMessage, FastField, FieldInputProps } from "formik";
import { Input } from "../ui/input";

interface SwitchProps {
  name: string;
  label: string;
}

function Switch({ name, label }: SwitchProps) {
  return (
    <div className="flex items-center justify-between my-4 gap-5">
      <label htmlFor={name} className="text-gray-700 dark:text-white">
        {label}
      </label>
      <FastField name={name}>
        {({ field }: { field: FieldInputProps<boolean> }) => (
          <label className="relative inline-block w-12 h-6">
            <Input
              type="checkbox"
              id={name}
              {...field}
              checked={field.value ?? false}
              className="sr-only peer"
            />
            <div
              className="w-full h-full bg-gray-300 peer-focus:ring-2 
               peer-checked:bg-[#171717] dark:peer-checked:bg-[#004142] 
              rounded-full transition duration-300"
            />
            <div
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white 
              rounded-full peer-checked:translate-x-6 
              transition-transform duration-300"
            />
          </label>
        )}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <p className="text-red-500 text-sm">{msg}</p>}
      />
    </div>
  );
}

export default Switch;