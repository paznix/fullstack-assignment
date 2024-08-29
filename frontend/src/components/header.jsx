import Logo from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpen = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const newCard = await response.json();
        console.log("New card created:", newCard);
      } else {
        const errorData = await response.json();
        console.error("Error creating card:", errorData.error);
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }
    handleClose();
  };

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
            <button className="border border-1 py-1 px-3 md:py-1 md:px-4  rounded-md font-medium"
            onClick={handleOpen}>
              Submit a request
            </button>
            {isFormOpen && (
              <div className="fixed w-screen left-0 bottom-0 h-screen z-20 flex justify-center items-center bg-black/50 text-black/60 backdrop-blur-lg">
                <div className="bg-white rounded-xl px-10 py-10 shadow-xl md:text-2xl font-medium">
                  <form onSubmit={handleSubmit}>
                  <div className="bg-[#f4f6f8] px-4 py-5 rounded-t-lg flex gap-2 ">
                    <label htmlFor="title">Title:</label>
                    <input
                    className="bg-white/80 w-full pl-2 text-lg font-light rounded-md focus:outline-none"
                    placeholder="What is the issue?"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="bg-[#f4f6f8] px-4 py-5 rounded-b-lg flex gap-2">
                    <label htmlFor="description">Description:</label>
                    <textarea
                    placeholder="Elaborate your issue..."
                    className="bg-white/80 w-full pl-2 text-lg font-light rounded-md focus:outline-none"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="w-full flex justify-between mt-10">
                    <button className="bg-white ease-in-out duration-200 text-red-600 hover:text-red-400 rounded-lg py-1.5 px-4 md:text-lg" onClick={handleClose}>Cancel</button>
                  <button className="bg-[#dadbf0] hover:bg-[#1a1a1a]/20 ease-in-out duration-200 text-black/60 rounded-lg py-1.5 px-4 shadow-lg md:text-lg" type="submit">Submit Request</button>
                  </div>
                  
                </form>
              </div>
                </div>
                
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
