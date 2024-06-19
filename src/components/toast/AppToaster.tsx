import { Toaster } from "react-hot-toast";

export const AppToaster = () => {
  return (
    <Toaster
      containerStyle={{
        top: 100,
      }}
      toastOptions={{
        duration: 3000,
      }}
      position="top-right"
    />
  );
};
