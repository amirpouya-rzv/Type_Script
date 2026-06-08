import { ErrorMessage, FastField, FieldProps } from "formik";
import React from "react";

interface CheckboxOption {
    id: string | number;
    title: string;
}

interface CheckboxProps {
    name: string;
    label: string;
    options?: CheckboxOption[];
}

function Checkbox({ name, label, options = [] }: CheckboxProps) {
    return (
        <div>
            <label htmlFor={name} className="block text-gray-700 mb-2">{label}</label>
            <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                {options.map((option) => (
                    <FastField name={name} key={option.id}>
                        {({ field, form }: FieldProps<(string | number)[]>) => {
                            const { value } = field;
                            const checked = value.includes(option.id);

                            return (
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={String(option.id)}
                                        className="mr-2"
                                        checked={checked}
                                        onChange={() => {
                                            const newValue = checked
                                                ? value.filter((val) => val !== option.id)
                                                : [...value, option.id];

                                            form.setFieldValue(name, newValue);
                                        }}
                                    />
                                    <label htmlFor={String(option.id)} className="cursor-pointer">
                                        {option.title}
                                    </label>
                                </div>
                            );
                        }}
                    </FastField>
                ))}
                <ErrorMessage name={name} />
            </div>
        </div>
    );
}

export default Checkbox;