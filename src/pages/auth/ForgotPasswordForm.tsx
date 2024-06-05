import { useState } from "react";
import PasswordResetModal from "../../components/modal/PasswordResetModal";
import FormInput from "../../components/form/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../../schema/auth/forgotPassword";

const ForgotPasswordForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data) => {
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-[554px]">
        <div className="mb-[30px] ">
          <h1 className="font-bold text-3xl mb-[5px]">Forgot Password</h1>
          <p className="capitalize font-semibold text-[1.1rem] leading-[1.5rem] text-[#36474F] ">
            Enter your email below to recieve a password reset link
          </p>
        </div>
        <div className="mb-10">
          <FormInput
            id="email"
            label="Email"
            placeholder="Enter Email"
            type="email"
            register={register("email")}
            error={errors.email}
          />
        </div>

        <button
          type="submit"
          className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
        >
          Send
        </button>
      </div>
      <PasswordResetModal isOpen={isModalOpen} onClose={closeModal} />
    </form>
  );
};

export default ForgotPasswordForm;
