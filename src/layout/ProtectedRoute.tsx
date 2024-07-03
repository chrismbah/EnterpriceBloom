import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  // Retrieve onboarding status from local storage
  const onboardingStatus = JSON.parse(localStorage.getItem("onboarding") ?? "{}");

  // Extract step and completion status, with defaults
  const { completed = false, step = 0 } = onboardingStatus;

  // Determine if the user should be redirected home
  const shouldRedirectHome = step > 3;

  // Conditional navigation based on onboarding status
  if (completed) {
    return element;
  }

  return shouldRedirectHome ? <Navigate to="/" /> : <Navigate to="/onboarding" />;
};

export default ProtectedRoute;
