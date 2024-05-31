import { Link } from "react-router-dom";
const AboutYouForm = () => {
  return (
    <div className="w-full flex flex-col gap-[40px] items-center">
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="full-name"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Full Name
          </label>
          <input
            placeholder="Enter Full Name"
            id="full-name"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="email"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            id="phone-number"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="password"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Business Name{" "}
            <span className="text-[18px] leading-[21.78px] text-neutral-700">
              (Optional)
            </span>
          </label>
          <input
            placeholder="Enter Business Name"
            id="business-name"
            type="business-name"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="password"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Date of Birth
          </label>
          <input
            placeholder="eg. 01-01-2009"
            id="date-of-birth"
            type="date-of-birth"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>
      </div>
      <Link
        to="/interests"
        className="w-full place-content-center text-[20px] leading[24.2px] font-bold bg-primary-500 text-white rounded-[8px] h-[72px] p-[10px] text-center"
      >
        Proceed
      </Link>
    </div>
  );
};

export default AboutYouForm;
