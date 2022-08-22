import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nft from "./Components/routes/Nft";
import Docs from "./Components/routes/Docs";
import { createContext, useState } from "react"


export const ThemeContext = createContext("null")

function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return ( 
      <ThemeContext.Provider value ={{theme, toggleTheme}} > {/* ThemeContext is allowing the toggle between the themes*/}
    <div className="App" id={theme}>
      <BrowserRouter>
        <Nav toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="NFT" element={<Nft />} />
          <Route path="Docs" element={<Docs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
      </ThemeContext.Provider>
  );
}

export default App;
