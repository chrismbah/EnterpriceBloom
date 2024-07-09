import { Toaster, DefaultToastOptions } from "react-hot-toast";
export const AppToaster = () => {
  const toastOption: DefaultToastOptions = {
    success: {
      style: {
        background: "green",
        color: "#fff",
        textTransform: "capitalize",
      },
    },
    error: {
      style: {
        background: "#DA281C",
        color: "#fff",
        textTransform: "capitalize",
      },
    },
  };

  return <Toaster toastOptions={toastOption} />;
};
