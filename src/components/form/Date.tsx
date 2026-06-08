import React, { useEffect, useState } from "react";
import { ErrorMessage, FastField, FormikProps } from "formik";
import moment from "jalali-moment";

interface Month {
  value: number;
  label: string;
}

interface DateProps<T extends Record<string, unknown>> {
  formik: FormikProps<T>;
  name: keyof T & string;
  label: string;
  icon?: React.ReactNode;
}

function Date<T extends Record<string, unknown>>({
  formik,
  name,
  label,
  icon,
}: DateProps<T>) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months: Month[] = [
    { value: 1, label: "فروردین" },
    { value: 2, label: "اردیبهشت" },
    { value: 3, label: "خرداد" },
    { value: 4, label: "تیر" },
    { value: 5, label: "مرداد" },
    { value: 6, label: "شهریور" },
    { value: 7, label: "مهر" },
    { value: 8, label: "آبان" },
    { value: 9, label: "آذر" },
    { value: 10, label: "دی" },
    { value: 11, label: "بهمن" },
    { value: 12, label: "اسفند" },
  ];

  const [day, setDay] = useState<number | undefined>(undefined);
  const [month, setMonth] = useState<number | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  const [showConfig, setShowConfig] = useState<boolean>(false);

  useEffect(() => {
    const now = moment();
    const jalali = now.locale("fa");

    setDay(parseInt(jalali.format("jD")));
    setMonth(parseInt(jalali.format("jM")));
    setYear(parseInt(jalali.format("jYYYY")));
  }, []);

  const handleShowDataConfig = (): void => {
    setShowConfig(true);
  };

  const fieldError = formik.errors[name] as string | undefined;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField
        disabled
        id={name}
        name={name}
        className={`w-full px-4 py-2 border rounded ${
          fieldError ? "border-red-500" : "border-gray-300"
        }`}
      />
      <ErrorMessage name={name} />
      {fieldError && (
        <p className="text-red-500 text-sm">{fieldError}</p>
      )}

      {showConfig && (
        <div className="mt-4">
          <p>روز: {day}</p>
          <p>ماه: {months.find((m) => m.value === month)?.label}</p>
          <p>سال: {year}</p>
        </div>
      )}
      <button
        type="button"
        onClick={handleShowDataConfig}
        className="mt-2 text-blue-500 underline"
      >
        نمایش اطلاعات تاریخ
      </button>
    </div>
  );
}

export default Date;