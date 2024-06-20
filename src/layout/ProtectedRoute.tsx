import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const storedOnboarding = localStorage.getItem("onboarding");

  if (storedOnboarding) {
    const onboardingStatus = JSON.parse(storedOnboarding);
    if (onboardingStatus.completed) {
      return element;
    }
    if (onboardingStatus.step > 3) {
      return <Navigate to="/" />;
    } else {
      return <Navigate to="/onboarding" />;
    }
  }
  // If there's no onboarding status in localStorage, redirect to the start of the onboarding process
  return <Navigate to="/onboarding" />;
};

export default ProtectedRoute;
