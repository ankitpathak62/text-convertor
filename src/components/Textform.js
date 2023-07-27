import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState('Enter Text here');

    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
     return (
        <>
            <div className="container">

                <div className="mb-3">

                    <h3>Enter the text</h3>
                    <textarea className="form-control" value={text} onChange={handleOnChange}   id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    convert to upper case
                </button>
                <button className="btn btn-primary" onClick={handleLowClick}>
                    convert to Lower case
                </button>
            </div>
        </>

    )
}
