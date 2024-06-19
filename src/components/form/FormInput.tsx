import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  optionalLabel?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
  optionalLabel,
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor={id} className="font-semibold">
          {label} <span className="text-neutral-700">{optionalLabel}</span>
        </label>
        <input
          placeholder={placeholder}
          id={id}
          {...register}
          type={type}
          className={`w-full focus:outline-none border-[1.5px] rounded-[8px] ${
            error ? "border-primary-600" : "border-[#B8C5CA] "
          } h-12 py-3 px-4 
          placeholder:text-[#B8C5CA] placeholder:text-sm text-neutral-800`}
        />
      </div>
      {error?.message && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default FormInput;
