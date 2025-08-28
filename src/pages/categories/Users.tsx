import ConfirmModal from "@/components/shared/ConfirmModal";
import { deleteUsersServices, getUsersServices } from "@/services/UsersServices";
import { AddUserType } from "@/types/UsersType";
import { successToast } from "@/utils/toastUtils";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Users = () => {
  // state for data
  const [data, setData] = useState<AddUserType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<AddUserType | null>(null);

  // get data
  const handleGetData = async () => {
    const res = await getUsersServices();
    setData(res);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  // open modal before delete
  const handleDeleteItem = (value: AddUserType) => {
    setSelectedUser(value);
    setShowModal(true);
  };

  // confirm delete
  const handleConfirmDelete = async () => {
    if (!selectedUser) return;

    const res = await deleteUsersServices(selectedUser.id); // id رو پاس بده
    if (res.status === 200) {
      const newList = data.filter((user) => user.id !== selectedUser.id);
      setData(newList);
      successToast("User deleted successfully");
    }
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-hidden rounded-xl shadow-lg">
        <table className="w-full table-auto text-sm dark:text-white hover:bg-slate-300 bg-slate-200 text-black dark:bg-stone-800 rounded-xl overflow-hidden">
          <thead className="dark:bg-stone-700 bg-slate-400 dark:text-white">
            <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-center">
              <th className="hidden md:block">#</th>
              <th>Name</th>
              <th className="hidden md:block">UserName</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((value) => (
                <tr
                  className="[&>td]:px-4 [&>td]:py-3 [&>td]:text-center text-center border-b border-stone-700 dark:hover:bg-stone-900 hover:bg-slate-500 transition-colors duration-200"
                  key={value.id}
                >
                  <td>{value.id}</td>
                  <td>{value.username}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td className="flex gap-2 justify-center">
                    <button className="text-emerald-700">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteItem(value)}
                      className="text-rose-700"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Nothing here
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* confirm modal */}
      <ConfirmModal
        icon={BiTrash}
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
        title="Delete User"
        message={`?Are you sure you want to delete ${
          selectedUser?.name || "this user"
        }`}
      />
    </div>
  );
};

export default Users;
