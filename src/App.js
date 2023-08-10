
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}  />
        <Route path='/destination'  element={<Destination/>}  >
         
        </Route>
        <Route path='/crew'  element={<Crew/>}  />
        <Route path='/technology'  element={<Technology/>}  />
        <Route path='*' element={<h1 className='page-not-found'>Page Not Found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
