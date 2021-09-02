import React,{useState} from "react";

export default function TextArea(props) {

  const handleClick=()=>{
    console.log("Button was clicked!");
    setText(text.toUpperCase());
  }

  const handleClick1=()=>{
      setText(text.toLowerCase());
  }

  const handleChange=(e)=>{
    console.log("On Change");
    setText(e.target.value);
  }

  const cleartext=()=>{
    setText('');
  }

  const[text, setText] = useState("");
  return (
    <>
    <div class="container my-5">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          {props.text}
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange} ></textarea>
        <button className="btn btn-primary my-3" onClick={handleClick}>Convert to Upper Case!</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClick1}>Convert to Lower Case!</button>
        <button className="btn btn-primary my-3 " onClick={cleartext}>Clear!</button>
      </div>
    </div>
    <div id="chara" className="container">
      <h1>Text Summary: </h1>
      <p >{text.split(" ").length} Words and {text.length} Characters</p>
      <p>Time taken to read the text: <b>{0.008*text.split(" ").length}</b> Minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
