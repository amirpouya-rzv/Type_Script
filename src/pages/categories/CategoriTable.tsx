import Table from "@/components/table/Table";
import { getCategories } from "@/services/category";
import { CategoryType } from "@/types/CategoryType";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";

const CategoriTable = () => {
  const [data, setData] = useState<CategoryType>([]);

  const handelgetcategorylist = async () => {
    try {
      const res = await getCategories();

      if (res.status == 200) {
        setData(res.data)
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
    { field: "title", title: "نام" },
    { field: "descriptions", title: "توضیحات" },
    { field: "created_at", title: "تولید  شده در" },
  ];

  const activityField = {
    element: (row) => (
      <div className="flex gap-2">
        <button onClick={() => alert(row.name)}>Edit</button>
        <button onClick={() => alert(row.id)}>Delete</button>
      </div>
    ),
  };

  return (
    <Table data={data} datainfo={datainfo} activityField={activityField} />
  );
};

export default CategoriTable;
