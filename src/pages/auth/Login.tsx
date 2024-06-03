import LoginForm from "./LoginForm";
import img1 from "../../assets/svg/login/C7726E445AA0684A.png";
import img2 from "../../assets/svg/login/C7726E445AA0684B.png";
import img3 from "../../assets/svg/login/C7726E445AA0685B.png";
import img4 from "../../assets/svg/login/D389EFE1192F14CF.png";
import img5 from "../../assets/svg/login/chat_box1.svg";
import img6 from "../../assets/svg/login/chat_box2.svg";
import img7 from "../../assets/svg/login/mglass.svg";
import img8 from "../../assets/svg/login/C7726E445AA0684C.png";

const Login = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex items-center justify-center relative bg-gradient-to-r from-[#DA281C] to-[#74150F]">
      <LoginForm />
      <img
        src={img1} // 4a
        alt="Scattered Image 1"
        className="absolute top-[122px] left-[463px]"
      />
      <img
        src={img2} //4b
        alt="Scattered Image 2"
        className="absolute top-[465px] left-[125px]"
      />{" "}
      <img
        src={img2} //4b
        alt="Scattered Image 2"
        className="absolute top-[902px] left-[365px]"
      />{" "}
      <img
        src={img3} //5b
        alt="Scattered Image 1"
        className="absolute top-[75px] left-[1418px]"
      />
      <img
        src={img4} //cf
        alt="Scattered Image 2"
        className="absolute top-[949px] left-[1440px]"
      />
      <img
        src={img5} //cb1
        alt="Scattered Image 1"
        className="absolute top-[902px] left-[365px]"
      />
      <img
        src={img6} //cb2
        alt="Scattered Image 2"
        className="absolute top-[449px] left-[1565px]"
      />{" "}
      <img
        src={img7} //glass
        alt="Scattered Image 2"
        className="absolute top-[510px] left-[202.14px] w-[38px] h-[64.55px] "
      />{" "}
      <img
        src={img8} //4c
        alt="Scattered Image 2"
        className="absolute top-[183px] left-[911px]  w-[180px] h-[200.08px] "
      />
    </div>
  );
};

export default Login;
