import httpService from "./_httpService";

export const getProfileUser = (id?: number) =>
  httpService(`/auth/user${id ? `?parent=${id}` : ""}`, "get");



