import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";
import Services from "./Component/Services/Services";
// import BackGround from "./Component/Ui/BackGround";

function App() {
  return (
    <>
    {/* <BackGround/> */}
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
