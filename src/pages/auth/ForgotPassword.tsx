import ForgotPasswordForm from "./ForgotPasswordForm";
import logo from "../../assets/logo_2.png";
import { Link } from "react-router-dom";
import instagram from "../../assets/svg/instagram_white.svg";
import x from "../../assets/svg/x_white.svg";
import linkedin from "../../assets/svg/linkedin_white.svg";
import ellipse163 from "../../assets/svg/ellipse163.svg";
import ellipse164 from "../../assets/svg/ellipse164.svg";
const ForgotPassword = () => {
  return (
    <div className="onboarding-layout flex min-h-screen w-screen overflow-x-hidden ">
      <div
        className=" w-[40%] bg-primary-500 min-h-screen z-10 overflow-hidden
          flex items-center flex-col justify-center px-[88px] relative"
      >
        <div>
          <img
            src={logo}
            alt="Entreprise Bloom"
            className="w-[300px] h-[70px] object-cover mb-[100px] -ml-8"
          />
          <h2 className="font-semibold text-white text-3xl leading-[40px] mb-[10px] ">
            Welcome to <br /> EnterpiseBloom
          </h2>
          <p className="capitalize text-white text-[15px] leading-[32px] text-sm font-semibold mb-[24px] ">
            The EnterpriseBuzz community arms you with aggressive, bold, and
            somewhat controversial strategies that grant you mastery over
            business growth and annihilate your competition, securing your
            leadership in the fierce battle for market share.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={instagram} alt="instagram" className="w-6 h-6 " />
            </Link>{" "}
            <Link to="/">
              <img src={x} alt="x" className="w-6 h-6 " />
            </Link>{" "}
            <Link to="/">
              <img src={linkedin} alt="linkedin" className="w-6 h-6 " />
            </Link>
          </div>
        </div>
        <img
          src={ellipse163}
          alt="ellipse"
          className="absolute bottom-0 -left-16 w-[200px] h-[200px] z-[-1] "
        />
        <img
          src={ellipse164}
          alt="ellipse"
          className="absolute -bottom-24 left-0 w-[200px] h-[200px] z-[-1] "
        />
      </div>
      <div
        className="form-section h-screen overflow-y-auto hide-scrollbar overflow-x-hidden 
          w-[60%] flex flex-col items-center justify-center px-[50px]"
      >
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
