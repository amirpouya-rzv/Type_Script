import { SendCategoryType } from "@/types/CategoryType";
import * as Yup from "yup";

export const initialValues: SendCategoryType = {
  title: "",
  descriptions: "",
  parent_id: "",
  is_active: false,
  show_in_menu: false,
  image: null,
};



export const validationSchema = Yup.object({
  title: Yup.string().required("عنوان الزامی است"),
  descriptions: Yup.string().required("توضیحات الزامی است"),
  parent_id: Yup.string(),
  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
  image: Yup.mixed<File>()
    .nullable()
    .optional()
    .test("fileType", "فقط فایل‌های JPEG و PNG مجاز هستند", (value) => {
      if (!value) return true;
      return ["image/jpeg", "image/png"].includes((value as File).type);
    })
    .test("fileSize", "اندازه فایل نباید بیشتر از ۲ مگابایت باشد", (value) => {
      if (!value) return true; 
      return (value as File).size <= 2 * 1024 * 1024;
    }),
});