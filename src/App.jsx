import "./styles.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </LanguageProvider>
    </>
  );
}

export default App;
