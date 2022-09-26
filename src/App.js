import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center 
     bg-2 bg-no-repeat bg-cover bg-transparent
    justify-start flex-1 overflow-y-hidden overflow-x-hidden box-border">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
