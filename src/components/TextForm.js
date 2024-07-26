import React, {useState} from 'react'
// import Navbar from './Navbar';


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();   
        setText(newText)
        props.showAlert("Converted to loewrcase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
        
    }
    const handleClearClick = ()=>{
        console.log("Search clicked");
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const [text, setText] = useState('');
   // text = "new text";//Wrong way to change the state
    // setText("new text");//Correct way to change the state
  return (
    <>
    {/* <div className="container">
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
    <div className='container'  style={{color: props.mode === 'dark'?'white':'black'}} >
           <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008*text.split(" ").length } Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it hetre"}</p>
    </div>
    </>
  )
}
