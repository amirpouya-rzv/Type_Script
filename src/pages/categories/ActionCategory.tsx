import { getCategories } from "@/services/category";
import { CategoryType } from "@/types/CategoryType";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import CategoriTable from "./CategoryTable";

const ActionCategory = () => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const handelgetcategorylist = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      if (res.status == 200) {
        console.log(res)
        setData(res.data.data);
      } else {
        errorToast(res.data.message);
      }
    } catch (error) {
      errorToast("خطا در دریافت اطلاعات");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    handelgetcategorylist();
  }, []);



  
  return (
    <CategoriTable
      data={data}
      loading={loading}
      handelgetcategorylist={handelgetcategorylist}
    />
  );
};

export default ActionCategory;