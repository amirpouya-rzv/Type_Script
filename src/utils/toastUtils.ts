import { toast, TypeOptions, ToastOptions } from "react-toastify";

let isToastVisible = false;

// تشخیص تم (اگر داری dark class روی html یا body)
const isDarkMode = () =>
  document.documentElement.classList.contains("dark") ||
  document.body.classList.contains("dark");

const baseOptions = (type: TypeOptions, autoClose: number | false): ToastOptions => ({
  closeOnClick: true,
  autoClose,
  type,
  rtl: true,
  theme: isDarkMode() ? "dark" : "light",
  onClose: () => {
    isToastVisible = false;
  },
});

export const showToast = (
  text: string,
  icon: TypeOptions = "info",
  autoClose: number | false = 3000
) => {
  if (!isToastVisible) {
    isToastVisible = true;
    toast(text, baseOptions(icon, autoClose));
  }
};

//  Error
export const errorToast = (text = "عملیات ناموفق") => {
  return showToast(text, "error", 5000);
};

//  Success
export const successToast = (text = "عملیات موفق") => {
  return showToast(text, "success", 3000);
};

//  Warning
export const warningToast = (text = "هشدار") => {
  return showToast(text, "warning", 4000);
};

//  Info
export const infoToast = (text = "اطلاعات") => {
  return showToast(text, "info", 3000);
};


