import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userInfo: {},
  orders: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      return {
        ...state,
        userInfo: action?.payload,
      };
    },
  },
});

export const { loadUserInfo } = userSlice?.actions;

export const selectUserInfo = (state) => state?.userState?.userInfo ?? {};
export const selectIsUserAdmin = (state) =>
  state?.userState?.userInfo?.authorityList?.find(
    (authority) => authority?.roleCode === "ADMIN"
  )?.authority === "ADMIN";
export default userSlice?.reducer;
