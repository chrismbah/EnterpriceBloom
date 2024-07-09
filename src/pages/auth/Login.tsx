import LoginForm from "./LoginForm";
import bg from "../../assets/svg/login/login_bg.svg";
import googleIcon from "../../assets/icons/google.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
// import { ReactSVG } from "react-svg";

const Login = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex items-center justify-center relative bg-gradient-to-r from-[#DA281C] to-[#74150F]">
      <div className="z-10 w-[600px] mx-5 rounded-[24px] border border-white/50 px-8 py-10 bg-gradient-to-t from-white/10 to-white/10 backdrop-blur-md">
        <LoginForm />
        {/* OAuth */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="text-sm font-medium text-white">Or log in with</p>
          <div className="w-full flex flex-col items-center gap-4 ">
            <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] font-bold bg-[#F3F4F5] h-[52px] p-[8px] text-center rounded-[8px]">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />{" "}
              <span>Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] font-bold bg-[#F3F4F5] h-[52px] p-[8px] text-center rounded-[8px]">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />{" "}
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
      {/* <ReactSVG
        src={bg}
        className="absolute w-full h-screen object-cover"
        beforeInjection={(svg) =>
          svg.setAttribute("class", "absolute w-screen h-screen object-cover")
        }
      /> */}
      <img
        src={bg}
        alt="bg"
        className="absolute w-screen h-screen object-cover"
      />
    </div>
  );
};

export default Login;
