const Search = () => {
  return (
    <>
      <div className="font-roboto w-full bg-[#dadbf0] flex flex-col gap-9 justify-center items-center py-28">
        <h2 className="text-4xl md:text-6xl font-medium text-center">How can we help?</h2>
        <input className="border border-3 focus:outline-none border-black w-3/4 md:w-1/3 py-3 px-3 text-xl rounded-md" type="search" name="search" id="search" placeholder="Search" />
      </div>
    </>
  );
};

export default Search;
