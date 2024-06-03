import { Link } from "react-router-dom";
const AboutYouForm = () => {
  return (
    <div className="w-full flex flex-col gap-[40px] items-center">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="full-name" className="font-semibold">
            Full Name
          </label>
          <input
            placeholder="Enter Full Name"
            id="full-name"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="phoneNumber" className="font-semibold">
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            id="phoneNumber"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="businessName" className="font-semibold">
            Business Name{" "}
            <span className=" text-neutral-700">
              (Optional)
            </span>
          </label>
          <input
            placeholder="Enter Business Name"
            id="businessName"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="dateOfBirth" className="font-semibold">
            Date of Birth
          </label>
          <input
            placeholder="eg. 01-01-2009"
            id="dateOfBirth"
            type="date"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
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
