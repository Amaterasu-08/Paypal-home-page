import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Container from "./components/Container";
import Footer from "./components/Footer";


function App() {
  return (
    <main className="relative">
      <Navbar />
      <SearchBar />
      <Card type={"info"}/>
      <Container />
      <Card type={"help"} />
      <Card type={"survey"} />
      <Footer />
    </main>
  );
}

export default App;
