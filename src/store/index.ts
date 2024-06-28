// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./slices/onboardingSlice.ts";
import { apiOne, apiTwo } from "./slices/apiSlice.ts";
import authReducer from "./slices/authSlice.ts";
const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    [apiOne.reducerPath]: apiOne.reducer,
    [apiTwo.reducerPath]: apiTwo.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiOne.middleware, apiTwo.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
