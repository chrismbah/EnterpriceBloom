// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetOnboarding, nextStep, setSignup, setAboutYou, setInterests } from '../store/slices/onboardingSlice';

// export const useOnboarding = () => {
//   const dispatch = useDispatch();
//   const { signup, aboutYou, interests, step } = useSelector(state => state.onboarding);

//   useEffect(() => {
//     const savedState = JSON.parse(localStorage.getItem('onboardingState'));
//     if (savedState) {
//       dispatch(setSignup(savedState.signup));
//       dispatch(setAboutYou(savedState.aboutYou));
//       dispatch(setInterests(savedState.interests));
//       for (let i = 1; i < savedState.step; i++) {
//         dispatch(nextStep());
//       }
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem('onboardingState', JSON.stringify({ signup, aboutYou, interests, step }));
//   }, [signup, aboutYou, interests, step]);

//   useEffect(() => {
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => window.removeEventListener('beforeunload', handleBeforeUnload);
//   }, []);

//   const handleBeforeUnload = (event) => {
//     const state = { signup, aboutYou, interests, step };
//     localStorage.setItem('onboardingState', JSON.stringify(state));
//     event.preventDefault();
//     event.returnValue = '';
//   };
// };
