import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import SectionArticles from "./sectionArticles/SectionArticles";
import SectionHelp from "./sectionHelp/SectionHelp";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <SectionHelp />
      <SectionArticles />
      <Footer />
    </div>
  );
}

export default App;
