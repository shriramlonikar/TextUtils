// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
// import React, { useState } from 'rect'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // Weather darkmode is enabled or not
  const [alert, setAlert] = useState("hi"); 

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
}

const removeBodyClasses = () => {
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#072f57';
      showAlert("Dark mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }
  const toggleRed = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#072f57';
      showAlert("Red mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
{/* <Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleRed={toggleRed}/>
<Alert alert={alert}/>
<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
