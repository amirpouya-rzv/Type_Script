import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// ✅ درست کردن دیسپیچ تایپ‌شده
export const useAppDispatch: () => AppDispatch = useDispatch;

// ✅ درست کردن سلکتور تایپ‌شده
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
