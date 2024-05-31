import { Link } from "react-router-dom";
const AboutYouForm = () => {
  return (
    <div className="w-full flex flex-col gap-[40px] items-center">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="full-name" className="font-semibold">
            Full Name
          </label>
          <input
            placeholder="Enter Full Name"
            id="full-name"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[30px] px-[20px] py-[24px] 
            placeholder:font-medium"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="email" className="font-semibold">
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            id="phone-number"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[30px] px-[20px] py-[24px] 
            placeholder:font-medium"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="password" className="font-semibold">
            Business Name{" "}
            <span className="text-[18px] leading-[21.78px] text-neutral-700">
              (Optional)
            </span>
          </label>
          <input
            placeholder="Enter Business Name"
            id="business-name"
            type="business-name"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[30px] px-[20px] py-[24px] 
            placeholder:font-medium"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="password" className="font-semibold">
            Date of Birth
          </label>
          <input
            placeholder="eg. 01-01-2009"
            id="date-of-birth"
            type="date-of-birth"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[30px] px-[20px] py-[24px] 
            placeholder:font-medium"
          />
        </div>
      </div>
      <Link
        to="/interests"
        className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        Proceed
      </Link>
    </div>
  );
};

export default AboutYouForm;
