import { ErrorMessage, FastField, FieldInputProps } from "formik";
import React, { Fragment } from "react";

interface RadioOption {
  id: string | number;
  value: string;
}

interface RadioProps {
  name: string;
  label: string;
  options: RadioOption[];
}

function Radio({ name, label, options }: RadioProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField name={name}>
        {({ field }: { field: FieldInputProps<string | number> }) =>
          options.map((option) => (
            <Fragment key={option.id}>
              <input
                type="radio"
                id={`radio${option.id}`}
                {...field}
                value={option.id}
                checked={field.value === option.id}
                className="mr-2"
              />
              <label htmlFor={`radio${option.id}`} className="mr-4">
                {option.value}
              </label>
            </Fragment>
          ))
        }
      </FastField>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Radio;