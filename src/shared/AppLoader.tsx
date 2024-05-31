import { BounceLoader } from "react-spinners";
const AppLoader = ({ fullScreen }: { fullScreen?: boolean }) => {
  return (
    <div
      style={{
        height: fullScreen ? "100vh" : "100%",
        width: fullScreen ? "100vw" : "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BounceLoader
        color="#DA281C"
        loading={true}
        size="100"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default AppLoader;
