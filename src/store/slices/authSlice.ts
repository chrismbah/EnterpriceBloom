import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  userId: string;
  accessToken: string;
}
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  onboardingStep: number;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  onboardingStep: 0,
};

export const refreshToken = createAsyncThunk("auth/refresh-token", async () => {
  const response = await axios.post("/auth/refreshToken");
  return response.data; // Assuming response contains the new access token
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setOnboardingStep: (state, action: PayloadAction<number>) => {
      state.onboardingStep = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.onboardingStep = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      if (state.user) {
        state.user.accessToken = action.payload.accessToken; // Update accessToken in state.user
      }
    });
    builder.addCase(refreshToken.rejected, (state) => {
      // Handle refresh token expiration by clearing tokens
      // state.user.accessToken = null;
      state.user = null;
    });
  },
});

export const { setUser, setOnboardingStep, logout } = authSlice.actions;
export default authSlice.reducer;
