import Table from "@/components/table/Table";
import { CategoryType } from "@/types/CategoryType";
import { activityField, categoryDialog, datainfo } from "./CategoryFeild";

type ActionType = {
  data: CategoryType[];
  loading: boolean;
  handelgetcategorylist: () => void;
};

const CategoriTable = ({ data, loading }: ActionType) => {
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
