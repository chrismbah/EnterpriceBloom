/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginFormData } from "../../schema/auth/login";
import { ErrorMessage } from "../../components/form/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/slices/apiSlices";
import ButtonLoader from "../../components/loaders/ButtonLoader";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { RootState } from "../../store";
const LoginForm = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      const { userId, ...userData } = response.userData;
      const accessToken = response.token;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
      console.log("Login successful:", response);
      toast.success("Login Successful");
      dispatch(setUser(userData));
      console.log(user);
      localStorage.setItem(
        "onboarding",
        JSON.stringify({
          step: 4,
          completed: true,
        })
      );
      navigate("/");
    } catch (error: any) {
      console.log("Registration error:", error);
      if (error?.data?.error.message) {
        toast.error(error.data.error.message);
      } else {
        toast.error("Registration Unsuccessful. Please try again later.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-6">
        <h1 className="font-bold text-2xl md:text-3xl text-white mb-2">
          Welcome Back
        </h1>
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
        disabled={isLoading}
        type="submit"
        className="mb-3 w-full block place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        {isLoading ? <ButtonLoader /> : "Log In"}
      </button>
    </form>
  );
};

export default LoginForm;
