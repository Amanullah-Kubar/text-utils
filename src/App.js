import Navbar from './components/Navbar';
import Field from './components/Field';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }

  return (
    <Router>
      <>
        <Navbar mode={mode} />
        <Routes>
          <Route path="/" element={<div className="container my-3">
            <Field mode={mode} />
          </div>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
