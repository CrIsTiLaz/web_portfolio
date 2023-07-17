import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification2 from "./components/qualification/Qualification2";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification2 />
        <Contact />
      </main>
    </>
  );
}

export default App;
