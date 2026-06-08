import { InputBasic } from "../shared/InputBasic";

type Props = {
  value: string;
  onChange: (v: string) => void;
  className?: string;
};

const TableSearch = ({ value, onChange, className }: Props) => {
  return (
    <InputBasic
      value={value}
      onChange={onChange}
      placeholder="جستجو..."
      className="border-black/30"
    />
  );
};

export default TableSearch;