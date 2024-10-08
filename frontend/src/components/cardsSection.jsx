import Cards from "./cards";

const Section = ({filteredCards}) => {
    return (
      <>
        <div className="container px-7 md:px-0 mx-auto bg-white w-full flex my-20">
            <div className=" flex flex-wrap justify-center gap-20">
              <Cards cardsData={filteredCards}/>  
            </div>
        </div>
      </>
    );
  };
  
  export default Section;
  