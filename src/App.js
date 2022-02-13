// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  //Method to show alert when some actions are done
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(
      () => { setAlert(null) },
      2000);
  };

  //Method to toggle the Dark mode when clicked on switch🤍<->🖤
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#385354';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
