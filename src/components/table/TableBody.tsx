import { useAppSelector } from "@/redux/ui_management/reduxHook";

const TableBody = ({ data, datainfo, activityField }: any) => {
  const { collapsed } = useAppSelector((state) => state.uiManagerReducer);
  return (
    <tbody>
      {data.map((row: any, i: number) => (
        <tr
          key={row.id ?? i}
          className="border-t-2 hover:shadow-xl  hover:font-bold"
        >
          {datainfo.map((col: any) => (
            <td key={col.field} className="px-4 py-3 text-center">
              {col.render ? col.render(row[col.field]) : row[col.field]}
            </td>
          ))}

          {activityField && (
            <td
              className={`px-16 py-3 text-center ${collapsed ? "px-20" : ""}`}
            >
              {activityField.element(row)}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
