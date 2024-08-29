import Section from "./components/cardsSection";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
