import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Category from './components/Category'
import Random from './components/Random';
import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
   return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
      <Route path='/' element={<Random />} />
      <Route path='/search' element={<Search />} />
      <Route path='/categories' element={<Category />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
