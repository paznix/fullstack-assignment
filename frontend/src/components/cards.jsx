import { useEffect, useState } from "react";

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/cards"); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setCardsData(data);
        } else {
          console.error("Error fetching cards:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <>
      {cardsData.map((card) => (
        <div key={card._id} className="w-full md:w-1/3 h-fit bg-[#f4f6f8] rounded-xl border-2 border-slate-600/20">
          <div className="border-b-2 border-slate-600/20 px-5 py-4">
            <h2 className="text-xl font-bold text-gray-500 ">{card.title}</h2>
          </div>
          <div className="px-5 py-5 text-xl text-gray-500">
            <h3>
              {card.description}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
