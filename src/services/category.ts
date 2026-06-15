import httpService from "./_httpService";

export const getCategories = (id?: number) =>
  httpService(`/admin/categories${id ? `?parent=${id}` : ""}`, "get");



