import React, { useEffect, useState } from 'react';
import { getCategoriesServices } from '../../services/CategoriesServiceis';
import { taskCategoriesListType } from '../../types/taskCategories';

const Categories = () => {
  const [categories, setCategories] = useState<taskCategoriesListType[]>([])

  const handleGetCategories = async () => {
    const data = await getCategoriesServices();
    setCategories(data);
    console.log('دریافت شده:', data);
  }

  useEffect(() => {
    handleGetCategories()
  }, [])

  return (
    <div className="p-4">
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
                className="[&>td]:px-4 [&>td]:py-3 [&>td]:text-center text-center border-b border-stone-700  dark:hover:bg-stone-900 transition-colors duration-200"
              >
                <td className="   hidden md:block">{value.id}</td>
                <td>{value.title}</td>
                <td className="   hidden md:block">{value.description}</td>
                <td>{value.createdAt}</td>
                <td>
                  <button className="text-blue-400 hover:underline mx-1">ویرایش</button>
                  <button className="text-red-400 hover:underline mx-1">حذف</button>
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
