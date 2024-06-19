import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    step: Number(localStorage.getItem("onboardingStep")) || 1,
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { nextStep, setStep } = onboardingSlice.actions;

export default onboardingSlice.reducer;
