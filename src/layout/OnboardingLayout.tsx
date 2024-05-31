import {
  Outlet,
  // useLocation
} from "react-router-dom";
import logo from "../assets/logo.png";
import { OnboardingSlider } from "../components/OnboardingSlider";
// import { motion, AnimatePresence } from "framer-motion";

const OnboardingLayout = () => {
  // const location = useLocation();

  // const pageVariants = {
  //   initial: {
  //     x: "100%",
  //     opacity: 0,
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       mass: 1,
  //       stiffness: 100,
  //       damping: 15,
  //     },
  //   },
  //   exit: {
  //     x: "-100%",
  //     opacity: 0,
  //     transition: {
  //       type: "spring",
  //       mass: 1,
  //       stiffness: 100,
  //       damping: 15,
  //     },
  //   },
  // };
  return (
    <div className="onboarding-layout flex min-h-screen w-screen overflow-x-hidden ">
      <div
        className="slider-section hidden lg:w-[664px] bg-primary-500 min-h-screen z-10
          lg:flex items-center flex-col justify-center"
      >
        <img
          src={logo}
          alt="Entreprise Bloom"
          className="w-[248.3px] h-[56px] object-cover"
        />
        <OnboardingSlider />
      </div>
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="w-full h-full"
        > */}
      <div className="form-section h-screen overflow-y-auto hide-scrollbar overflow-x-hidden flex-1 flex flex-col pt-[120px] pb-20 pl-[140px]">
        <Outlet />
      </div>
      {/* </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default OnboardingLayout;
