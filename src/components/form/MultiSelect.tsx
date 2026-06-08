import React from "react";
import { FastField, FieldInputProps, FieldProps, FormikProps } from "formik";

interface MultiSelectOption {
  id: string | number;
  title: string;
}

interface MultiSelectProps {
  name: string;
  label: string;
  options?: MultiSelectOption[];
}

function MultiSelect({ name, label, options = [] }: MultiSelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField name={name}>
        {({ field, form }: FieldProps<(string | number)[]>) => {
          const selectedValues: (string | number)[] = field.value ?? [];

          const handleChange = (optionId: string | number): void => {
            const isSelected = selectedValues.includes(optionId);
            const newValue = isSelected
              ? selectedValues.filter((v) => v !== optionId)
              : [...selectedValues, optionId];

            form.setFieldValue(name, newValue);
          };

          return (
            <div className="border border-gray-300 rounded w-full max-h-48 overflow-y-auto">
              {options.length === 0 ? (
                <p className="text-gray-400 text-sm px-4 py-2">گزینه‌ای موجود نیست</p>
              ) : (
                options.map((option) => {
                  const isSelected = selectedValues.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => handleChange(option.id)}
                      className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors ${
                        isSelected ? "bg-blue-50 text-blue-700" : "text-gray-700"
                      }`}
                    >
                      <span className="text-sm">{option.title}</span>
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          );
        }}
      </FastField>

      {/* نمایش آیتم‌های انتخاب‌شده */}
      <FastField name={name}>
        {({ field }: { field: FieldInputProps<(string | number)[]> }) => {
          const selectedValues: (string | number)[] = field.value ?? [];
          const selectedOptions = options.filter((o) =>
            selectedValues.includes(o.id)
          );

          return selectedOptions.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedOptions.map((option) => (
                <span
                  key={option.id}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {option.title}
                </span>
              ))}
            </div>
          ) : null;
        }}
      </FastField>
    </div>
  );
}

export default MultiSelect;