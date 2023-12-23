import Navbar from "./sureshnav/Navbar";
import "./App.css";
// import Textform from "./sureshnav/About";
// import change from "./sureshnav/About";
import { useState } from "react";
import Alert from "./sureshnav/alert";
// import Slide from "./sureshnav/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./sureshnav/About";
import About from "./sureshnav/About";
// import Switch from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enables or not
  const [bmode, setBmode] = useState("dark"); // whether dark mode is enables or not
  const [alert, setAlert] = useState(null);
  const img1 = "./publicG:\reactjsmy-apppubliclogo512.png";

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const togglemode = ()=>{
  //   if(mode==="light"){
  //     setMode ("dark")
  //   }
  //   else{
  //     setMode("light")
  //   }
  // }
  const togglemode = () => {
    if (bmode === "light") {
      setBmode("dark");
      showAlert("Dark mode has been enabled ", "success");
    } else {
      setBmode("light");
      showAlert("light mode has been enabled ", "success");
    }
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const imageUrl = "m1.png";
  return (
    <>
    {/* //   <Router> */}
        {/* <body style={change}> */}

        <Navbar
          title="Suresh-Tech"
          About="About"
          mode={mode}
          clickmode={togglemode}
          Bmode={bmode}
        />
        <Alert alert={alert} />
        {/* <Navbar /> */}
         <div className="container my-3">
         <About
                          showAlert={showAlert}
                          heading="Enter the to analyze "
                          mode={mode}
                          Bmode={bmode}
                        />
                    {/* <Routes> */}
                      {/* <Route  path="/" element={<Home/>}></Route> */}

                      {/* <Route exect
                        path="/About"
                        element={
                          <About
                          showAlert={showAlert}
                          heading="Enter the to analyze "
                          mode={mode}
                          Bmode={bmode}
                        /> */}
                          
                        {/* } */}
                      {/* ></Route> */}
                    {/* </Routes> */}
        </div>
        {/* */}

     
      {/* </Router> */}

    </>
  );
}

export default App;
