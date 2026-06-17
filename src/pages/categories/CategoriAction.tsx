import Table from "@/components/table/Table";
import { getCategories } from "@/services/category";
import { CategoryType } from "@/types/CategoryType";
import { errorToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";

import {datainfo , activityField , categoryDialog} from './CategoryFeild'
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

  
  

  

  return (
    <Table
      data={data}
      datainfo={datainfo}
      activityField={activityField}
      loading={loading}
      tabletitle="دسته بندی ها"
      dialog={categoryDialog}  
      />
  );
};

export default CategoriTable;