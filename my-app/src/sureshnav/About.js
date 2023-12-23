// import React from 'react'
import React, { useState } from "react";

export default function About(props) {  //  in this write props and use the props 
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState();
  const handupclick = () => {
    // setText("you have")
    console.log("allready clicked");
    // let newtext = text.toUpperCase();
    // setText(newtext);
    if (text.includes('.')) {
      var words = text.replace(/\.$/, "").split(".");
      console.log(words)

      for (var i = 0; i < words.length; i++) {

        
        if (words[i][0] === " ") {
            words[i] = words[i][1].toUpperCase() + words[i].substring(2);
           
        }
        else{
            words[i] = words[i][0].replace(/\.$/, "").toUpperCase() + words[i].substring(1);

        }
        // console.log(words.length)
      }

      var result = words.join(".");
      setText(result);
    }
    // let newtext = text.toUpperCase();
    // setText(newtext);
  };
  const handleonchange = (event) => {
    // console.log("ok")
    setText(event.target.value);

  };
  
  const [change,setchange] = useState({
    
    color:"black",
   backgroudColor: "white",
  })

  /// BACKGROUND COLOR CHANGE KRNE KE LIYE 
  let changess = ()=>{
    if(change.backgroudColor === 'white'){
      setchange({
        color:"white",
        backgroudColor:"black",
      })
    }
    else{
      setchange({
        color:"black",
       backgroudColor:"white",
      })
    }
  }

  /// COPY KRANE KE LIYE 
  const copy = () =>{
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select()
    text.setSelectionRange(0,999)
    navigator.clipboard.writeText(text.value)
    props.showAlert("copy to clipboard ","success")
  }
  /// SPACE HANDLE KRNE KE LIYE 
  const handespace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces remove","success")
  }
  
  


  return (
    <>
    <body  >
      <div className={` bg-${props.mode}`}>
   
      {/* <h1 className="center">{props.heading}</h1>  // this way useing the props 
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}
      <div className={` bg-${props.mode}`}>
        <label htmlFor="exampleFormControlTextarea1" className= {` bg-${props.mode} text-${props.Bmode}`}>
          Comment --
        </label>
        <textarea
          className={`form-control  bg-${props.mode} text-${props.Bmode}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonchange}
          placeholder="comment please"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handupclick}>
          Convert to upercase
        </button>
      </div>
      {/* <div className="container">
        <h5>your comment anlixing == </h5>
        <p> your word {text.split(" ").length} and your letters {text.length}</p>
        <p>  {(0.48 *text.split(" ").length)/60} Minutes read</p>
      </div> */}

      <div className={` bg-${props.mode}`}>
        <button type="button" className="btn btn-primary" onClick={changess}>change Mode</button>
        <button type="button" className="btn btn-primary mx-3" onClick={copy}>copy</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handespace}>handlespace</button>
      </div>
      </div>
      </body>
    </>
  );
}


