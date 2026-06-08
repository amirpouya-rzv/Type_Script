// toastUtils.ts
import { toast, TypeOptions } from "react-toastify";

// فلگ سراسری برای جلوگیری از نمایش مکرر Toast
let isToastVisible = false;

export const showToast = (
  text: string,
  icon: TypeOptions = "info",
  autoClose: number | false = 3000 // مقدار پیش‌فرض
) => {
  // فقط اگر Toast باز نشده، نمایش بده
  if (!isToastVisible) {
    isToastVisible = true;
    toast(text, {
      closeOnClick: true,
      autoClose,
      type: icon,
      rtl: true,
      onClose: () => {
        isToastVisible = false;
      },
    });
  }
};

export const errorToast = (text = "عملیات ناموفق") => {
  return showToast(text, "error", 5000);
};

export const successToast = (text = "عملیات موفق") => {
  return showToast(text, "success", 3000);
};

