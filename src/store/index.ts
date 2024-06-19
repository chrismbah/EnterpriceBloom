// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./slices/onboardingSlice.ts";
const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
