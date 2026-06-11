import Table from "@/components/table/Table";
import { getCategories } from "@/services/category";
import { CategoryType } from "@/types/CategoryType";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const CategoriTable = () => {
  const [data, setData] = useState<CategoryType>([]);

  const handelgetcategorylist = async () => {
    try {
      const res = await getCategories();

      if (res.status == 200) {
        setData(res.data.data);
        console.log(res.data);
      } else {
        errorToast(res.data.message);
      }
    } catch (error) {
      errorToast(res.data.message);
    }
  };

  useEffect(() => {
    handelgetcategorylist();
  }, []);

  const datainfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام" },
    { field: "descriptions", title: "توضیحات" },
    { field: "created_at", title: "اضافه شده در" },
  ];

  const activityField = {
    title: "عملیات",
    element: (row: any) => (
      <TooltipProvider delayDuration={100}>
        <div className="flex gap-2">
          {/* Tooltip جزئیات */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="text-sky-500 cursor-pointer"
                onClick={() => alert(row.title)}
              >
                <BiDetail />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>جزئیات</p>
            </TooltipContent>
          </Tooltip>

          {/* Tooltip زیرمجموعه‌ها */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="text-amber-500 cursor-pointer"
                onClick={() => alert(row.title)}
              >
                <FaSitemap />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>زیرمجموعه‌ها</p>
            </TooltipContent>
          </Tooltip>

          {/* Tooltip ویرایش */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="text-green-500 cursor-pointer"
                onClick={() => alert(row.title)}
              >
                <GrEdit />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>ویرایش</p>
            </TooltipContent>
          </Tooltip>

          {/* Tooltip حذف */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="text-rose-500 cursor-pointer"
                onClick={() => alert(row.id)}
              >
                <FaDeleteLeft />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>حذف</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
  };

  return (
    <Table data={data} datainfo={datainfo} activityField={activityField} />
  );
};

export default CategoriTable;
