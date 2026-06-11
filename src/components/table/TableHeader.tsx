import SortIcon from "./SortIcon";

type Props = {
  datainfo: any[];
  activityField?: any;
  sortField: string | null;
  sortDir: "asc" | "desc";
  onSort: (field: string) => void;
};

const TableHeader = ({
  datainfo,
  activityField,
  sortField,
  sortDir,
  onSort,
}: Props) => {
  return (
    <thead>
      <tr className="bg-zinc-50 dark:bg-inherit border-b dark:text-white ">
        {datainfo.map((col) => (
          <th
            key={col.field}
            onClick={() => onSort(col.field)}
            className="px-4 py-3 text-center text-xs font-semibold cursor-pointer  shadow-xl"
          >
            <div className="flex justify-center gap-1 text-right">
              {col.title}
              <SortIcon
                active={sortField === col.field}
                dir={sortDir}
              />
            </div>
          </th>
        ))}

        {activityField && (
          <th className="px-4 py-3 text-center text-xs font-semibold shadow-lg">
            {activityField.title}
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;