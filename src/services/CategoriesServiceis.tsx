import { data } from "react-router-dom";
import httpService from "./_httpService";
import { AddCategoriesType } from "@/types/taskCategories";

// get categories
export const getCategoriesServices = async () => {
    const response = await  httpService('/taskCategories', "GET") // دریافت اطلاعات
    if (response.status == 200) // اگر درخواست موفقیت آمیز بود 
        return response.data;
    
    return null // بازگرداندن اطلاعات
}


// add categories
export const addCategoriesServices =  (values : AddCategoriesType) => {
    return httpService('/taskCategories', "POST", {
   ...values
    })  
  
}


export const deleteCategoriesServices =  (catId : string) => {
    return httpService(`/taskCategories/${catId}`, "DELETE")  
  
}