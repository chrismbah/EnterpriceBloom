import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserProfile } from "../../types/user";

export interface AuthState {
  userData: UserData | UserProfile | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  userData: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
