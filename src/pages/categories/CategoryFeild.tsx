import { FaDeleteLeft } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { BiDetail } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa6";
import { TooltipSides } from "@/components/shared/Toolip";
import { converMiladi2Jalali } from "@/utils/dateutils";


export const datainfo = [
  { field: "id", title: "#" },
  { field: "title", title: "نام" },
  { field: "descriptions", title: "توضیحات" },
 { 
    field: "created_at", 
    title: "اضافه شده در",
  render: (value: string) => converMiladi2Jalali(value, "jYYYY/jMM/jD")
  },  
{ 
  field: "show_in_menu", 
  title: "نمایش در منو",
  render: (value: number) => value === 1 
    ? <span className="text-green-500">✓ بله</span> 
    : <span className="text-rose-500">✗ خیر</span>
},];

export const activityField = {
  title: "عملیات",
  element: (row: any) => {
    const actions = [
      {
        title: "جزئیات",
        icon: <BiDetail />,
        color: "text-sky-500",
        onClick: () => alert(row.title),
      },
      {
        title: "زیرمجموعه‌ها",
        icon: <FaSitemap />,
        color: "text-amber-500",
        onClick: () => alert(row.title),
      },
      {
        title: "ویرایش",
        icon: <GrEdit />,
        color: "text-green-500",
        onClick: () => alert(row.title),
      },
      {
        title: "حذف",
        icon: <FaDeleteLeft />,
        color: "text-rose-500",
        onClick: () => alert(row.id),
      },
    ];
    return (
      <div className="flex gap-2">
        {actions.map((action) => (
          <TooltipSides key={action.title} title={action.title} side="top">
            <button
              className={`${action.color} cursor-pointer`}
              onClick={action.onClick}
            >
              {action.icon}
            </button>
          </TooltipSides>
        ))}
      </div>
    );
  },
};





