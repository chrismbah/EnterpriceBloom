import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  // Temp onboarding protected route
  const onboardingStatus = JSON.parse(
    localStorage.getItem("onboarding") ?? "{}"
  );

  if (onboardingStatus.completed) {
    return element;
  }

  const currentStep = onboardingStatus.step || 0;
  const shouldRedirectToOnboarding = currentStep > 3;

  return shouldRedirectToOnboarding ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/onboarding" />
  );
};

export default ProtectedRoute;
