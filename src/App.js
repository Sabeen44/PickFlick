//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmojiList from './Main.js';
import About from './About';
import  SlantedClickHereSign from './ClickSign.js';
//import MovieList from './Movies';
//import EmojiCategories from './EmojiCategories.js';
//import MovieList from './FetchMovieTest';



function App() {
  return (
    <>
    <div className="grid-container">
    <Router>
      <Header className='row-one' />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <div className='row-two'>< SlantedClickHereSign/></div>
    <EmojiList className='row-three' />
     </div>
    
     <div>
      
      
        {/* <EmojiCategories/>  */}
         {/* <MovieList/>   */}
       
       
    </div>
    </>
  );
}

export default App;

