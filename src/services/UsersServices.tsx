import { data } from "react-router-dom";
import httpService from "./_httpService";
import { AddUserType } from "@/types/UsersType";

// get Users
export const getUsersServices = async () => {
    const response = await httpService('/users', "GET")
    if (response.status == 200)
        return response.data;
}


// add Users
export const addUsersServices = (values: AddUserType) => {
    return httpService('/users', "POST", {
        ...values
    })
}

//delete Users
export const deleteUsersServices = (catId: string) => {
    return httpService(`/users/${catId}`, "DELETE")
}

//update Users
export const updateUsersServices = (catId: string, values: AddUserType) => {
    return httpService(`/users/${catId}`, "PUT", values)
}