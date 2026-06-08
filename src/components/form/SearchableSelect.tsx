import { ErrorMessage, FastField, FieldProps } from "formik";
import { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface SelectOption {
  id: number;
  value: string;
}

interface SearchableSelectProps {
  resultType?: "string" | "array";
  options: SelectOption[];
  name: string;
  label: string;
  className?: string;
  firstItem?: string;
  initialItems?: SelectOption[];
}

const SearchableSelect = ({
  resultType = "array",
  options,
  name,
  label,
  className,
  firstItem,
  initialItems = [],
}: SearchableSelectProps) => {
  const [selectedItems, setSelectedItems] = useState<SelectOption[]>([]);
  const [showItems, setShowItems] = useState<boolean>(false);
  const [copyOptions, setCopyOptions] = useState<SelectOption[]>(options);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const bodyClickListener = useRef<(() => void) | null>(null);

  useEffect(() => {
    setSelectedItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    setCopyOptions(options.filter((o) => o.value.includes(searchTerm)));
  }, [options, searchTerm]);

  useEffect(() => {
    bodyClickListener.current = () => setShowItems(false);
    document.body.addEventListener("click", bodyClickListener.current);

    return () => {
      if (bodyClickListener.current) {
        document.body.removeEventListener("click", bodyClickListener.current);
      }
    };
  }, []);

  const handleSelectItems = (
    selectedId: number,
    form: FieldProps["form"]
  ): void => {
    const alreadySelected = selectedItems.findIndex((d) => d.id === selectedId) !== -1;
    if (!alreadySelected && selectedId > 0) {
      const found = options.find((o) => o.id === selectedId);
      if (!found) return;

      const newData = [...selectedItems, found];
      setSelectedItems(newData);

      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType === "string" ? selectedIds.join("-") : selectedIds;
      form.setFieldValue(name, nameValue);
    }
  };

  const handleRemoveFromSelectedItems = (
    event: React.MouseEvent,
    selectedId: number,
    form: FieldProps["form"]
  ): void => {
    event.stopPropagation();
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id !== selectedId);
      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType === "string" ? selectedIds.join("-") : selectedIds;
      form.setFieldValue(name, nameValue);
      return newData;
    });
  };

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <FastField name={name}>
        {({ form }: FieldProps) => (
          <div className="relative">
            <div
              className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-md cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowItems((prev) => !prev);
              }}
            >
              <div className="flex flex-wrap gap-2">
                {selectedItems.length > 0 ? (
                  selectedItems.map((selectedItem) => (
                    <span
                      className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm shadow-md"
                      key={selectedItem.id}
                    >
                      <FaTimes
                        className="text-red-500 cursor-pointer ml-2"
                        onClick={(e) =>
                          handleRemoveFromSelectedItems(e, selectedItem.id, form)
                        }
                      />
                      {selectedItem.value}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">{firstItem}</span>
                )}
              </div>

              <input
                type="text"
                className="border-none outline-none text-sm mt-1 w-full"
                placeholder="جستجو..."
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {showItems && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                <ul className="p-0 m-0">
                  {copyOptions.length > 0 ? (
                    copyOptions.map((o) => (
                      <li
                        key={o.id}
                        className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-gray-700"
                        onClick={() => handleSelectItems(o.id, form)}
                      >
                        {o.value}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-400 text-sm">نتیجه‌ای یافت نشد</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
      />
    </div>
  );
};

export default SearchableSelect;