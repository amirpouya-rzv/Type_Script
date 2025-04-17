export const getCategoriesServices = async () => {
    const response = await fetch('http://localhost:3001/taskCategories') // دریافت اطلاعات
    const res = await response.json() // تبدیل اطلاعات به JSON
    return res // بازگرداندن اطلاعات
}
