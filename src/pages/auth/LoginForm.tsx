import googleIcon from "../../assets/icons/google.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginFormData } from "../../schema/auth/login";
import { ErrorMessage } from "../../components/form/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="z-10 w-[600px] mx-5 rounded-[24px] border border-white/50 px-8 py-10 bg-gradient-to-t from-white/10 to-white/10 backdrop-blur-md 
        "
    >
      <div className="mb-6">
        <h1 className="font-bold text-3xl text-white mb-2">Welcome Back</h1>
        <p className="text-white font-medium">
          Log in to your account to continue enjoying the experience
        </p>
      </div>
      <div className="flex flex-col gap-3 mb-2.5 ">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white font-semibold ">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter Email"
              className="rounded-[8px] py-3 px-4 focus:outline-none focus:border-none placeholder:text-[#B8C5CA] placeholder:font-medium placeholder:text-sm "
            />
          </div>
          {errors.email?.message && (
            <ErrorMessage
              message={errors.email?.message}
              className="text-white"
            />
          )}
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white font-semibold ">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter Password"
              className="rounded-[8px] py-3 px-4 focus:outline-none focus:border-none placeholder:text-[#B8C5CA] placeholder:font-medium placeholder:text-sm "
            />
          </div>
          {errors.password?.message && (
            <ErrorMessage
              message={errors.password?.message}
              className="text-white"
            />
          )}
        </div>
      </div>
      <Link to="/forgot-password">
        <p className="w-full text-right font-semibold text-white mb-2.5">
          Forgot Password?
        </p>
      </Link>
      <button
        type="submit"
        className="mb-3 w-full block place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        Log In
      </button>
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
    </form>
  );
};

export default LoginForm;
