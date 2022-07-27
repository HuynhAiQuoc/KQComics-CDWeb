import React  from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home/index.js';
import Browse from '~/pages/Browse/index.js';
import Layout from '~/components/Layout/index.js';
import SearchResult from '~/pages/SearchResult/index.js';
import Detail from './pages/Detail/index.js';
import Reader from './pages/Reader/index.js';
import History from './pages/History/index.js';

import CommentService from "./service/comment.service.js";
 
import {useEffect} from 'react'

function App() {
 
  useEffect(() => {
    CommentService.add();
  },[])

  return (
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

  );
}

export default App;
