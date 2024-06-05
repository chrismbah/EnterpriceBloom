import LoginForm from "./LoginForm";
import bg from "../../assets/svg/login/login_bg.svg";
const Login = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex items-center justify-center relative bg-gradient-to-r from-[#DA281C] to-[#74150F]">
      <LoginForm />
      <img
        src={bg}
        alt="bg"
        className=" absolute w-screen h-screen object-cover"
      />
    </div>
  );
};

export default Login;
