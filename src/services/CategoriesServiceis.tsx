import { data } from "react-router-dom";
import httpService from "./_httpService";
import { AddCategoriesType } from "@/types/taskCategories";

// get categories
export const getCategoriesServices = async () => {
    const response = await  httpService('/taskCategories', "GET") 
    if (response.status == 200)
        return response.data;
}


// add categories
export const addCategoriesServices =  (values : AddCategoriesType) => {
    return httpService('/taskCategories', "POST", {
   ...values
    })  
}

//delete categories
export const deleteCategoriesServices =  (catId : string) => {
    return httpService(`/taskCategories/${catId}`, "DELETE")  
}

//update categories
export const updateCategoriesServices =  (catId : string , values : AddCategoriesType) => {
    return httpService(`/taskCategories/${catId}`, "PUT" , values)  
}