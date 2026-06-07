import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import React from "react";
import Table from "@/components/table/Table";

const Users = () => {
  // fetch information from api
  const data = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
    { id: 2, name: "Ervin Howell",  username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
    { id: 3, name: "Ervin Howell",  username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
    { id: 4, name: "Ervin Howell",  username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
    { id: 5, name: "Ervin Howell",  username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
    { id: 6, name: "Ervin Howell",  username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  ];

// table title
  const datainfo = [
    { field: "id",       title: "#" },
    { field: "name",     title: "نام" },
    { field: "username", title: "نام کاربری" },
    { field: "email",    title: "ایمیل" },
    { field: "phone",    title: "تلفن" },
    { field: "website",  title: "وبسایت" },
  ];

    // activityField
  const activityField = {
    title: "عملیات",
    element: (row: Record<string, any>) => (
      <div className="flex justify-center gap-2">
        <button
          onClick={() => console.log("delete", row.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <MdOutlineDelete size={18} />
        </button>
        <button
          onClick={() => console.log("edit", row.id)}
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          <MdOutlineEdit size={18} />
        </button>
      </div>
    ),
  };

  return (
    <div>
      <Table datainfo={datainfo} data={data} activityField={activityField} />
    </div>
  );
};

export default Users;