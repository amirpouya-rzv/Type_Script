import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

type Props = {
  active: boolean;
  dir: "asc" | "desc";
};

const SortIcon = ({ active, dir }: Props) => {
  if (!active)
    return <ChevronsUpDown size={14} className="text-zinc-400 bac" />;

  return dir === "asc" ? (
    <ChevronUp size={14} className="text-emerald-600" />
  ) : (
    <ChevronDown size={14} className="text-emerald-600" />
  );
};

export default SortIcon;