import { useEffect, useState } from 'react';
import { getCategoriesServices } from '../../services/CategoriesServiceis';
import { AddCategoriesType } from '../../types/taskCategories';
import { CiTrash } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import Dialog from './_partials/Dialog';
import { converMiladi2Jalali } from '@/utils/dateutils';

const Categories = () => {
  const [categories, setCategories] = useState<AddCategoriesType[]>([])
    const [flag, setFlag] = useState(false);

  const handleGetCategories = async () => {
    const data = await getCategoriesServices();
    setCategories(data);
  }

  useEffect(() => {
    handleGetCategories()
    setFlag(!flag);
  }, [flag])




  return (
    <div className="p-4">
      <div className='flex justify-end'>
        <button type="button" >
          <Dialog />
        </button>

      </div>
      <div className="overflow-x-hidden rounded-xl shadow-lg">
        <table className="w-full table-auto text-sm dark:text-white hover:bg-slate-300 bg-slate-200 text-black dark:bg-stone-800 rounded-xl overflow-hidden">

          <thead className="dark:bg-stone-700  bg-slate-400 dark:text-white">
            <tr className='[&>th]:px-4 [&>th]:py-3 [&>th]:text-center'>
              <th className=" hidden md:block">#</th>
              <th>Title</th>
              <th className="  hidden md:block">Description</th>
              <th>Create At</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((value) => (
              <tr
                key={value.id}
                className="[&>td]:px-4 [&>td]:py-3 [&>td]:text-center text-center border-b border-stone-700  dark:hover:bg-stone-900 hover:bg-slate-500 transition-colors duration-200 "
              >
                <td className="   hidden md:block">{value.id}</td>
                <td>{value.title}</td>
                <td className="   hidden md:block">{value.description}</td>
                <td>{converMiladi2Jalali(value.createdAt, 'jD jMMMM jYYYY')}</td>
                <td>
                  <button className="text-blue-400 hover:underline mx-1"><FaRegEdit />
                  </button>
                  <button className="text-red-400 hover:underline mx-1"><CiTrash />
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-300">
                  دسته‌بندی‌ای برای نمایش وجود ندارد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
