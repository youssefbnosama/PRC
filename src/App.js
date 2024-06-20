import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Top from './components/Top';
import Game from './components/Game';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Challenge from './components/Challenge';
export const context = createContext()
function App() {
  const [value,setvalue] = useState([])
  const [score,setScore] = useState(0)
  return (
    <BrowserRouter>
    <context.Provider value={[value,setvalue,score,setScore]}>
          <div className='app'>
      <Top />
      <Routes>
        <Route path='/' element={    <Game />} />
        <Route path='/challenge' element={<Challenge />} />
      </Routes>

    </div>
    </context.Provider>

    </BrowserRouter>
  );
}

export default App;
