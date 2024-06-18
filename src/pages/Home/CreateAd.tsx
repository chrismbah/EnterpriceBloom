const CreateAd = () => {
  return (
    <div className="bg-white rounded-lg py-6 px-4 w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Create an Ad</h2>
        <p className="text-xs font-medium text-[#36474F]">
          Craft compelling advertisements that capture attention and drive
          engagement. Tailor your message to your audience and highlight your
          unique value proposition.
        </p>
        <button className="rounded-lg text-white bg-primary-500 py-3 px-7 text-xs w-fit ">
          Create an Ad
        </button>
      </div>
    </div>
  );
};

export default CreateAd;
