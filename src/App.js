import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home/index.js';
import Browse from '~/pages/Browse/index.js';
import Layout from '~/components/Layout/index.js';
import SearchResult from '~/pages/SearchResult/index.js';
import Detail from './pages/Detail/index.js';
import Reader from './pages/Reader/index.js';
import History from './pages/History/index.js';

export const ThemeContext = createContext("dark");

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const darkModeTheme = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={darkModeTheme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />

            <Route path="/browse" element={<Layout><Browse /></Layout>} />

            <Route path="/search" element={<Layout><SearchResult /></Layout>} />

            <Route path="/detail" element={<Layout><Detail /></Layout>} />

            <Route path="/reader" element={<Reader />} />

            <Route path="/history" element={<Layout><History /></Layout>} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>

  );
}

export default App;
