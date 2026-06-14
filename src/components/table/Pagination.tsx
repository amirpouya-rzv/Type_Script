type Props = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const Pagination = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}: Props) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="flex  items-center justify-between px-4 py-3 border-t backdrop-blur-sm text-sm">
      
      {/* LEFT */}
      <div className="text-zinc-600 flex items-center gap-3 dark:text-white">
        <span>
          صفحه {page} از {totalPages}
        </span>

        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm dark:text-white dark:border-white"
        >
          <option className="text-black dark:bg-black/50 " value={5}>5</option>
          <option className="text-black dark:bg-black/50 " value={10}>10</option>
          <option className="text-black dark:bg-black/50 " value={20}>20</option>
          <option className="text-black dark:bg-black/50 " value={50}>50</option>
        </select>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 ">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-40 dark:text-white disabled:cursor-not-allowed"
        >
          قبلی
        </button>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-40 dark:text-white disabled:cursor-not-allowed"
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default Pagination;