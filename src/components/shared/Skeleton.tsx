import { Skeleton } from "@/components/ui/skeleton";

type SkeletonType = "table" | "card" | "form" | "list";

interface SkeletonLoaderProps {
  type: SkeletonType;
  rows?: number;
}

const SkeletonLoader = ({ type, rows = 5 }: SkeletonLoaderProps) => {
const base = "bg-black/10 dark:bg-black/30";
  // -------------------- جدول --------------------
  if (type === "table") {
    return (
      <div className="flex w-full flex-col gap-3 p-4">
        <div className="flex gap-4">
          <Skeleton className={`h-6 w-32 ${base}`} />
          <Skeleton className={`h-6 w-24 ${base}`} />
          <Skeleton className={`h-6 w-28 ${base}`} />
          <Skeleton className={`h-6 flex-1 ${base}`} />
        </div>
        <hr className="opacity-20" />
        {Array.from({ length: rows }).map((_, i) => (
          <div className="flex gap-4" key={i} style={{ opacity: 1 - i * (0.8 / rows) }}>
            <Skeleton className={`h-4 w-32 ${base}`} />
            <Skeleton className={`h-4 w-24 ${base}`} />
            <Skeleton className={`h-4 w-28 ${base}`} />
            <Skeleton className={`h-4 flex-1 ${base}`} />
          </div>
        ))}
      </div>
    );
  }

  // -------------------- کارت --------------------
  if (type === "card") {
    return (
      <div className="flex flex-wrap gap-4 p-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3 p-4 border rounded-xl w-56">
            <Skeleton className={`h-32 w-full rounded-lg ${base}`} />
            <Skeleton className={`h-4 w-3/4 ${base}`} />
            <Skeleton className={`h-4 w-1/2 ${base}`} />
            <Skeleton className={`h-8 w-full rounded-md ${base}`} />
          </div>
        ))}
      </div>
    );
  }

  // -------------------- فرم --------------------
  if (type === "form") {
    return (
      <div className="flex flex-col gap-5 p-4 w-full max-w-md">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className={`h-4 w-24 ${base}`} />
            <Skeleton className={`h-10 w-full rounded-md ${base}`} />
          </div>
        ))}
        <Skeleton className={`h-10 w-full rounded-md mt-2 ${base}`} />
      </div>
    );
  }

  // -------------------- لیست --------------------
  if (type === "list") {
    return (
      <div className="flex flex-col gap-3 p-4 w-full">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className={`h-10 w-10 rounded-full ${base}`} />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className={`h-4 w-1/3 ${base}`} />
              <Skeleton className={`h-3 w-2/3 ${base}`} />
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default SkeletonLoader;