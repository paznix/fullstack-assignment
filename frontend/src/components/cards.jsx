const Cards = ({cardsData}) => {
  return (
    <>
      {cardsData.map((card) => (
        <div key={card._id} className="w-full md:w-1/3 h-fit bg-[#f4f6f8] rounded-xl border-2 border-slate-600/20 hover:cursor-pointer hover:shadow-lg ease-in-out duration-200">
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
