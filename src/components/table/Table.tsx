import { useMemo, useState, useEffect } from "react";
import { TableProps } from "@/types/TableTypes";
import TableSearch from "./TableSearch";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./Pagination";
import SkeletonLoader from "../shared/Skeleton";
import { errorToast } from "@/utils/toastUtils";

const Table = ({
  data=[],
  datainfo,
  activityField,
  loading,
  tabletitle,
  dialog,
}: TableProps) => {
  
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const filteredData = useMemo(() => {
    return data
      .filter((row) =>
        datainfo.some((col) =>
          String(row[col.field] ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()),
        ),
      )
      .sort((a, b) => {
        if (!sortField) return 0;
        const aValue = a[sortField];
        const bValue = b[sortField];
        const aNum = Number(aValue);
        const bNum = Number(bValue);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return sortDir === "asc" ? aNum - bNum : bNum - aNum;
        }
        return sortDir === "asc"
          ? String(aValue ?? "").localeCompare(String(bValue ?? ""))
          : String(bValue ?? "").localeCompare(String(aValue ?? ""));
      });
  }, [data, datainfo, search, sortField, sortDir]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [search, sortField, sortDir, pageSize]);

  return (
    <div className="backdrop-blur-sm rounded-2xl border-2 border-black/30 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b">
        <div className="text-sm fke font-semibold text-black/50 dark:text-white">
          {tabletitle}
        </div>
        <div className="flex items-center gap-5">
          <TableSearch value={search} onChange={setSearch} />
          {dialog}
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <SkeletonLoader type="table" rows={5} />
        ) : (
          <table className="w-full border-collapse text-sm table-fixed">
            <TableHeader
              datainfo={datainfo}
              activityField={activityField}
              sortField={sortField}
              sortDir={sortDir}
              onSort={handleSort}
            />
            <TableBody
              data={paginatedData}
              datainfo={datainfo}
              activityField={activityField}
            />
          </table>
        )}
      </div>

      <TablePagination
        page={page}
        pageSize={pageSize}
        total={filteredData.length}
        onPageChange={setPage}
        onPageSizeChange={(size: number) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </div>
  );
};

export default Table;
