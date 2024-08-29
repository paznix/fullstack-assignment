import React, { useEffect, useState } from "react";
import Section from "./components/cardsSection";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./components/search";


function App() {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/cards"); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setCardsData(data);
          setFilteredCards(data); // Initially, show all cards
        } else {
          console.error("Error fetching cards:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = cardsData.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  return (
    <div className="App">
      <Header/>
      <Search onSearch={handleSearch}/>
      <Section filteredCards={filteredCards}/>
      <Footer/>
    </div>
  );
}

export default App;
