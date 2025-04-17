import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// نوع برای تم (Theme)
type ThemType = "light" | "dark";

// نوع وضعیت اولیه استیت
type InitialStateType = {
  showsidebar: boolean;
  them: ThemType;
};

// وضعیت اولیه
const initialState: InitialStateType =
 { showsidebar: false, them: localStorage.getItem("them") as ThemType || "light"};

// ساختن slice
const uiManagerSlice = createSlice({
  name: "ui-Manager",
  initialState,
  reducers: {
    // تغییر وضعیت sidebar
    setShowSidebar: (state: InitialStateType, action: PayloadAction<boolean>) => {
      state.showsidebar = action.payload;
    },

    // تغییر تم از light به dark و بالعکس
    togleThem: (state: InitialStateType) => {
      const newThem = state.them === "light" ? "dark" : "light"
      state.them = newThem;
      localStorage.setItem("them",newThem) // ذخیره تم در لوکال استوریج

    },

    // تنظیم تم به صورت مستقیم
    setThem: (state: InitialStateType, action: PayloadAction<ThemType>) => {
      state.them = action.payload;
      localStorage.setItem("them",action.payload) // تغیر استیت

    }
  }
});

// ری‌دیوچر (reducer)
const uiManagerReducer = uiManagerSlice.reducer;

export default uiManagerReducer;

// export اکشن‌ها
export const { setShowSidebar, togleThem, setThem } = uiManagerSlice.actions;
