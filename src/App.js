import { Route, Routes } from 'react-router-dom';
import './App.css';
import Interakthome from './Components/Interakthome/Interakthome';
import Interaktlanding from './Components/Interaktlanding/Interaktlanding';
import 'aos/dist/aos.css'; 
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Interakthome/>}/>
        <Route path='/landingpage' element={<Interaktlanding/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
