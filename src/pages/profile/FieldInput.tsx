export const FieldInput = ({ label, value, name }: { label: string; value: string; name: string }) => (
  <div className="w-full mb-4">
    <label className="mt-5 dark:text-gray-300">{label}</label>
    <input
      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-black/30"
      value={value}
      type="text"
      name={name}
    />
  </div>
);

