
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home/index.js';
import Browse from '~/pages/Browse/index.js';
import Layout from '~/components/Layout/index.js';
import SearchResult from '~/pages/SearchResult/index.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />

          <Route path="/browse" element={<Layout><Browse /></Layout>} />

          <Route path="/search" element={<Layout><SearchResult /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
