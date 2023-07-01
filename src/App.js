import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/masterPage/Home';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
                {/*<Route path="/contacts" element={<Contacts/>}/> */}
            </Routes>
        </BrowserRouter>
      </div>
    </>
    );
}

export default App;
