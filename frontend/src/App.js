import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import News from './News';
import Menu from './Menu';
import AddNews from './AddNews';


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/AddNews" element={<AddNews />} />
      </Routes>
    </Router>
  );
}

export default App;