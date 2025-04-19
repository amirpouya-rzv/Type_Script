import httpService from "./_httpService";

export const getCategoriesServices = async () => {
    const response = await  httpService('/taskCategories', "GET") // دریافت اطلاعات
    if (response.status == 200) // اگر درخواست موفقیت آمیز بود 
        return response.data;
    
    return null // بازگرداندن اطلاعات
}
