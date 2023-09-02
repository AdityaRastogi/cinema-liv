const InfoButton = ({ title, infoAbout }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-normal">
      <h1 className="font-bold mt-8 text-2xl text-center w-full lg:w-20">
        {title}
      </h1>
      {infoAbout.map((item, index) => (
        <button
          className="bg-pink m-4 mt-4 rounded-full p-4 w-full md:w-40"
          key={item + index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default InfoButton;
