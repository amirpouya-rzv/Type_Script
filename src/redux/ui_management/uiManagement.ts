import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemType = "light" | "dark";

type InitialStateType = {
  showsidebar: boolean;
  them: ThemType;
  collapsed: boolean; // ✅ اضافه شد
};

const initialState: InitialStateType = {
  showsidebar: false,
  them: localStorage.getItem("them") as ThemType || "light",
  collapsed: false, // ✅ اضافه شد
};

const uiManagerSlice = createSlice({
  name: "ui-Manager",
  initialState,
  reducers: {
    setShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showsidebar = action.payload;
    },

    togleThem: (state) => {
      const newThem = state.them === "light" ? "dark" : "light";
      state.them = newThem;
      localStorage.setItem("them", newThem);
    },

    setThem: (state, action: PayloadAction<ThemType>) => {
      state.them = action.payload;
      localStorage.setItem("them", action.payload);
    },

    togleCollapsed: (state) => { // ✅ اضافه شد
      state.collapsed = !state.collapsed;
    },
  },
});

const uiManagerReducer = uiManagerSlice.reducer;
export default uiManagerReducer;

export const { setShowSidebar, togleThem, setThem, togleCollapsed } = uiManagerSlice.actions;