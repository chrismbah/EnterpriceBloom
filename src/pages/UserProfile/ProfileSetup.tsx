import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema, ProfileFormData } from "../../schema/profile";
import { ErrorMessage } from "../../components/form/ErrorMessage";

const ProfileSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
  });
  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="user_profile_setup w-full bg-white rounded-lg">
      <div className="py-8 px-8 border-b border-[#F3F4F5] ">
        <h1 className="font-bold text-xl">Profile Setup</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full py-6 px-8 flex flex-col gap-16 justify-end "
      >
        <div className="w-full flex flex-col gap-8">
          <div className="bio w-full">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor={"bio"} className="font-bold block">
                Bio
              </label>
              <textarea
                placeholder={"Enter Bio"}
                id={"bio"}
                {...register("bio")}
                className={`w-full resize-none h-[259px] focus:outline-none border border-[#D9D9D9] rounded-[8px] 
                   p-4 placeholder:text-[#7D7D7D] placeholder:text-sm text-neutral-800 text-sm`}
              />
            </div>
          </div>
          <div className="profile_fields flex flex-col gap-8">
            <div className="flex gap-3">
              <div className="w-full">
                <div className="w-full flex flex-col gap-[8px]">
                  <label htmlFor="dateOfBirth" className="font-bold">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Date of Birth"
                    onFocus={(e) => (e.target.type = "date")}
                    // onBlur={(e) => (e.target.type = "text")}
                    id="dateOfBirth"
                    {...register("dateOfBirth")}
                    className={`w-full focus:outline-none border-[1px] rounded-[8px] ${
                      errors.dateOfBirth
                        ? "border-primary-600"
                        : "border-[#D9D9D9]"
                    } h-12 py-3 px-4 text-sm placeholder:font-medium placeholder:text-[#7D7D7D] placeholder:text-sm`}
                    min={new Date(1950, 0, 1).toISOString().split("T")[0]}
                    max={new Date().toISOString().split("T")[0]}
                  />
                </div>
                {errors.dateOfBirth?.message && (
                  <ErrorMessage message={errors.dateOfBirth?.message} />
                )}
              </div>
              <div className={`w-full `}>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="username" className="font-bold">
                    Username
                  </label>
                  <input
                    placeholder="Create Username"
                    id={"username"}
                    {...register("username")}
                    className={`w-full focus:outline-none border-[1px] rounded-[8px] ${
                      errors.username
                        ? "border-primary-600"
                        : "border-[#D9D9D9] "
                    } h-12 py-3 px-4 text-sm placeholder:font-medium placeholder:text-[#7D7D7D] placeholder:text-sm`}
                  />
                </div>
                {errors.username?.message && (
                  <ErrorMessage message={errors.username.message} />
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className={`w-full `}>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="occupation" className="font-bold">
                    Occupation
                  </label>
                  <input
                    placeholder="Select Occupation"
                    id={"occupation"}
                    {...register("occupation")}
                    className={`w-full focus:outline-none border-[1px] rounded-[8px] ${
                      errors.occupation
                        ? "border-primary-600"
                        : "border-[#D9D9D9] "
                    } h-12 py-3 px-4 text-sm placeholder:font-medium placeholder:text-[#7D7D7D] placeholder:text-sm`}
                  />
                </div>
                {errors.occupation?.message && (
                  <ErrorMessage message={errors.occupation.message} />
                )}
              </div>
              <div className={`w-full`}>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="websiteUrl" className="font-bold">
                    Url
                  </label>
                  <input
                    placeholder="Enter your website link"
                    id={"websiteUrl"}
                    {...register("websiteUrl")}
                    className={`w-full focus:outline-none border-[1px] rounded-[8px] ${
                      errors.websiteUrl
                        ? "border-primary-600"
                        : "border-[#D9D9D9] "
                    } h-12 py-3 px-4 text-sm placeholder:font-medium placeholder:text-[#7D7D7D] placeholder:text-sm`}
                  />
                </div>
                {errors.websiteUrl?.message && (
                  <ErrorMessage message={errors.websiteUrl.message} />
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-[calc(50%-6px)]">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="companyName" className="font-bold">
                    Enter Company Name
                  </label>
                  <input
                    placeholder="Select Company Name"
                    id={"companyName"}
                    {...register("companyName")}
                    className={`w-full focus:outline-none border-[1px] rounded-[8px] ${
                      errors.companyName
                        ? "border-primary-600"
                        : "border-[#D9D9D9] "
                    } h-12 py-3 px-4 text-sm placeholder:font-medium placeholder:text-[#7D7D7D] placeholder:text-sm`}
                  />
                </div>
                {errors.companyName?.message && (
                  <ErrorMessage message={errors.companyName.message} />
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="rounded-lg w-fit py-3 px-8 text-sm text-white font-bold bg-primary-500">
          Save and Continue
        </button>
      </form>
    </div>
  );
};

export default ProfileSetup;
