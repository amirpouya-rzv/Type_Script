const TableBody = ({ data, datainfo, activityField }: any) => {
  return (
    <tbody>
      {data.map((row: any, i: number) => (
        <tr
          key={row.id ?? i}
          className="border-t-2 hover:shadow-xl  hover:font-bold"
        >
          {datainfo.map((col: any) => (
            <td key={col.field} className="px-4 py-3 text-center">
              {row[col.field]}
            </td>
          ))}

          {activityField && (
            <td className="px-16 py-3 text-center">
              {activityField.element(row)}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;