import React,{ useState } from "react"

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text converted to uppercase",'success')
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted to lowercase",'success')
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("TextArer is cleaned",'warning')
  }
  const handleCopy = ()=>{
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied to clipbord",'success')
  }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed",'success')
  }
  const handleCapatilize = ()=>{
    const words = text.split(' ');
    const capitalizedWords = words.map(word => {
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalized;
    });
     setText(capitalizedWords.join(' '));
     props.showAlert("Text  has been Capatalized",'success')
  }

  const handelOnChange = (event)=>{
    console.log('Onchange');
    setText(event.target.value);
    
  }
  function countWords(text) {
    // Trim leading and trailing spaces
    const trimmedText = text.trim();
    // If the text is empty, return 0
    if (trimmedText.length === 0) {
      return 0;}
    // Count the number of words by splitting on spaces and getting the length
    const wordCount = trimmedText.split(' ').length;
    return wordCount;}
  const [text, setText] = useState ('');
  return (
    
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCapatilize}>Capatilize</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy </button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summery</h1>
      <p>{countWords(text)} words and {text.length} Characters</p>
      <p>{text.split(' ').length - 1} Number of spaces between words </p>

      <p>{ 0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing to above textbox to preview here"}</p>


    </div>
    </>
  )

}

