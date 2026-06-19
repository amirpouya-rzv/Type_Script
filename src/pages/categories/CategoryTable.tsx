import Table from "@/components/table/Table";
import { CategoryType } from "@/types/CategoryType";
import { activityField, datainfo } from "./CategoryFeild"; // ← categoryDialog حذف شد
import { ReactNode } from "react";

type ActionType = {
  data: CategoryType[];
  loading: boolean;
  handelgetcategorylist: () => void;
  categoryDialog: ReactNode; // ← اضافه شد
};

const CategoriTable = ({ data, loading, categoryDialog }: ActionType) => {
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