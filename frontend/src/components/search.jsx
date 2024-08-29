import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);

  };
  return (
    <>
      <div className="font-roboto w-full bg-[#dadbf0] flex flex-col gap-9 justify-center items-center py-28">
        <h2 className="text-4xl md:text-6xl font-medium text-center">
          How can we help?
        </h2>
        <div className="bg-white flex justify-center items-center border border-black border-3 w-1/3 rounded-md px-3">
          <input
            className=" focus:outline-none w-full py-3 px-3 text-xl rounded-md"
            type="search"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
          <FaArrowRight className="hover:cursor-pointer hover:scale-110 duration-200 ease-in-out" onClick={handleSearch} />
        </div>
      </div>
    </>
  );
};

export default Search;
