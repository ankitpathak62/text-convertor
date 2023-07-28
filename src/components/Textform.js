import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick = () => {
        console.log(" " );
        let newText =  '';
        setText(newText)
    }


    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">

                <div className="mb-3">

                    <h3>Enter the text</h3>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    convert to upper case
                </button>

                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    convert to Lower case
                </button>

                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes to read </p>
                <h6>{text}Preview</h6>
            </div>
        </>

    )
}
