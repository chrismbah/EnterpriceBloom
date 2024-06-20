import { createSlice } from "@reduxjs/toolkit";

interface OnboardingState {
  step: number;
  completed: boolean;
}

const storedOnboarding = localStorage.getItem("onboarding");
const initialState: OnboardingState = storedOnboarding
  ? JSON.parse(storedOnboarding)
  : { step: 1, completed: false };

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
      if (state.step > 3) {
        state.completed = true;
      }
      localStorage.setItem("onboarding", JSON.stringify(state));
    },
    setStep: (state, action) => {
      state.step = action.payload;
      state.completed = state.step > 3;
      localStorage.setItem("onboarding", JSON.stringify(state));
    },
    resetOnboarding: (state) => {
      state.step = 1;
      state.completed = false;
      localStorage.removeItem("onboarding");
    },
  },
});

export const { nextStep, setStep, resetOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;
