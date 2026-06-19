import { ErrorMessage, FastField } from "formik";
import React from "react";

interface SelectOption {
  id: string | number;
  value: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
}

function Select({ name, label, options, placeholder = "دسته والد را انتخاب کنید ..." }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField
        id={name}
        as="select"
        name={name}
        className="flex w-full items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.value}
          </option>
        ))}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
      />
    </div>
  );
}

export default Select;