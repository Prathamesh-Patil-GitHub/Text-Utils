import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleUpClick = (e) => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to UPPERCASE","success");
    };

    const handleLoClick = (e) => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase","success");
    };

    const handleCapFirstClick = (e) => {
        let words=text.split(" ");
        let capitalizedWords=[];
        for(let word of words)
            capitalizedWords.push(word[0].toUpperCase()+ word.slice(1));
        setText(capitalizedWords.join(" "));
        props.showAlert("First letter of each word converted to UPPERCASE","success");
    };

    const handleClearClick = (e) => {
        if(! window.confirm("Are you sure, you want to clear the text?"))
            return;
        setText("");
        props.showAlert("Text cleared","success");
    };

    const handleCopyClick = (e) => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    };

    const handleRemoveSpacesClick = (e) => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra-spaces removed","success");
    };

    const [text, setText] = useState('');

    //Setting button mode to change the button color on dark mode💫
    let buttonMode='';
    if(props.mode==='light')
        buttonMode='primary';
    else
        buttonMode='dark';
    
    // Dark Mode color changing code for just TextForm elemen,❌ don't use if want dark mode globally
    // document.body.style.backgroundColor= props.mode==='light'?'white':'#385354';
    // document.body.style.color= props.mode==='light'?'black':'white';

    return (
        <>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1 className='my-3'>Enter your text here</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{color: `${props.mode==='light'?'black':'white'}`, backgroundColor: `${props.mode==='light'?'white':'black'}`}} id="textBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className='d-flex justify-content-center flex-wrap'>
                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleUpClick}>Convert to Uppercase</button>

                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleLoClick}>Convert to Lowercase</button>

                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleCapFirstClick}>Capitalize First Letter of Words</button>

                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleClearClick}>Clear Text</button>

                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleCopyClick}>Copy Text</button>

                    <button className={`btn btn-${buttonMode} mx-2 my-3`} onClick={handleRemoveSpacesClick}>Remove Extra-Spaces</button>
                </div>
            </div>
            <div className='container my-3'>
                <h3>Your Text Summary</h3>
                <p>Words: {text.length > 0 ? text.split(/[\s]+/).filter((element)=>{return element.length>0}).length : 0} | Characters: {text.length} </p>
                <p>{0.008 * (text.length > 0 ? text.split(/[\s]+/).filter((element)=>{return element.length>0}).length : 0)} minutes to read the text</p>
                <h3>Preview Text</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
