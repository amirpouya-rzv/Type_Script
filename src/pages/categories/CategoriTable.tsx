import Table from "@/components/table/Table";
import { getCategories } from "@/services/category";
import { CategoryType } from "@/types/CategoryType";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa6";
import { TooltipSides } from "@/components/shared/Toolip";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
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


  // datainfo
  const datainfo = [
    { field: "id", title: "#" },
    { field: "title", title: "نام" },
    { field: "descriptions", title: "توضیحات" },
    { field: "created_at", title: "اضافه شده در" },
  ];

// activityField
  const activityField = {
  title: "عملیات",
  element: (row: any) => {
    const actions = [
      { title: "جزئیات", icon: <BiDetail />, color: "text-sky-500", onClick: () => alert(row.title) },
      { title: "زیرمجموعه‌ها", icon: <FaSitemap />, color: "text-amber-500", onClick: () => alert(row.title) },
      { title: "ویرایش", icon: <GrEdit />, color: "text-green-500", onClick: () => alert(row.title) },
      { title: "حذف", icon: <FaDeleteLeft />, color: "text-rose-500", onClick: () => alert(row.id) },
    ]

    return (
      <div className="flex gap-2">
        {actions.map((action) => (
          <TooltipSides key={action.title} title={action.title} side="top">
            <button className={`${action.color} cursor-pointer`} onClick={action.onClick}>
              {action.icon}
            </button>
          </TooltipSides>
        ))}
      </div>
    )
  }
}

  return (
    <Table data={data} datainfo={datainfo} activityField={activityField} />
  );
};

export default CategoriTable;
