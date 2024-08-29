import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="w-full bg-black font-roboto">
        <div className="mx-3 md:mx-10 flex justify-between items-center">
          <div className="flex text-sm md:text-xl gap-2 py-4 items-center text-white">
            <div className="flex items-center justify-center">
              <img src={Logo} className="w-14" />
              <h1 className="font-medium">Abstract</h1>
            </div>

            <span>|</span>
            <h2 className="">Help Center</h2>
          </div>
          <div className="text-white justify-center items-center flex bg-[#1a1a1a]">
            <button className="border border-1 py-1 px-3 md:py-1 md:px-4  rounded-md font-medium">
              Submit a request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
