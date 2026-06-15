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
import { DialogDemo } from "@/components/shared/Diloag";   // 👈 اضافه کن
import { Field } from "@/components/ui/field";             // 👈 اضافه کن
import { Input } from "@/components/ui/input";             // 👈 اضافه کن
import { Label } from "@/components/ui/label";             // 👈 اضافه کن

const CategoriTable = () => {  
  const [data, setData] = useState<CategoryType>([]);
  const [loading, setLoading] = useState(true);

  const handelgetcategorylist = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      if (res.status == 200) {
        setData(res.data.data);
      } else {
        errorToast(res.data.message);
      }
    } catch (error) {
      errorToast("خطا در دریافت اطلاعات");
    } finally {
      setLoading(false);  // 👈 finally بهتره تا در همه حالت‌ها اجرا بشه
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
    element: (row: any) => {
      const actions = [
        { title: "جزئیات", icon: <BiDetail />, color: "text-sky-500", onClick: () => alert(row.title) },
        { title: "زیرمجموعه‌ها", icon: <FaSitemap />, color: "text-amber-500", onClick: () => alert(row.title) },
        { title: "ویرایش", icon: <GrEdit />, color: "text-green-500", onClick: () => alert(row.title) },
        { title: "حذف", icon: <FaDeleteLeft />, color: "text-rose-500", onClick: () => alert(row.id) },
      ];
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
      );
    },
  };

  // 👇 مدال مخصوص دسته‌بندی
  const categoryDialog = (
    <DialogDemo
      textbutton="افزودن دسته بندی جدید"
      title="دسته بندی جدید"
      description="اطلاعات دسته بندی جدید را وارد کنید"
    >
      <Field>
        <Label>نام دسته بندی</Label>
        <Input name="title" placeholder="مثلاً: الکترونیک" />
      </Field>
      <Field>
        <Label>توضیحات</Label>
        <Input name="descriptions" placeholder="توضیحات دسته بندی..." />
      </Field>
    </DialogDemo>
  );

  return (
    <Table
      data={data}
      datainfo={datainfo}
      activityField={activityField}
      loading={loading}
      tabletitle="دسته بندی ها"
      dialog={categoryDialog}  // 👈 مدال مخصوص پاس میشه
    />
  );
};

export default CategoriTable;