import { Route, Routes } from 'react-router-dom';
import './App.css';
import Interakthome from './Components/Interakthome/Interakthome';
import Interaktlanding from './Components/Interaktlanding/Interaktlanding';
import Navbar from './Components/Navbar/Navbar';
import 'aos/dist/aos.css'; 
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Interakthome/>}/>
        <Route path='/landingpage' element={<Interaktlanding/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
