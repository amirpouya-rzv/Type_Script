import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const TableSearch = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2 bg-white  border border-zinc-200 rounded-lg px-3 h-9">
      <Search size={14} className="text-zinc-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو..."
        className="outline-none text-sm w-40"
      />
    </div>
  );
};

export default TableSearch;