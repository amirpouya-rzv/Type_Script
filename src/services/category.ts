import { CategoryType, SendCategoryType } from "@/types/CategoryType";
import httpService from "./_httpService";

// get categories
export const getCategories = (id?: number) =>
  httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "get");



// add categories
export const addCategories = (data: SendCategoryType) => {
  if (data.image) {
    let formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("descriptions", data.descriptions);
    formdata.append('parent_id', String(data.parent_id)); // ← String()
    formdata.append('is_active', String(data.is_active));
    formdata.append('show_in_menu', String(data.show_in_menu));
    formdata.append('image', data.image);

    return httpService(`/admin/categories`, "post", formdata); // ← return
  }

  return httpService(`/admin/categories`, "post", data); // ← return
};