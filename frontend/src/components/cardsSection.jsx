import Cards from "./cards";

const Section = () => {
    return (
      <>
        <div className="container px-7 md:px-0 mx-auto bg-white w-full flex my-20">
            <div className=" flex flex-wrap justify-center gap-20">
              <Cards/>  
              <Cards/>  
              <Cards/>  
              <Cards/>  
              <Cards/>  
            </div>
        </div>
      </>
    );
  };
  
  export default Section;
  