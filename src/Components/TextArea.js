import React,{useState} from "react";

export default function TextArea(props) {

  const handleClick=()=>{
    console.log("Button was clicked!");
    setText(text.toUpperCase());
  }

  const handleClick1=()=>{
    console.log("Button was clicked again!");
    setText("Button was clicked again!");
  }

  const handleChange=(e)=>{
    console.log("On Change");
    setText(e.target.value);
  }

  const[text, setText] = useState("Default Text!");
  return (
    <>
    <div class="container my-5">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          {props.text}
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleChange} ></textarea>
        <button className="btn btn-primary my-3" onClick={handleClick}>Convert!</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClick1}>Convert1!</button>
      </div>
    </div>
    <div className="container">
      <h1>Text Summary: </h1>
      <p>23 Words, 234 Characters</p>
    </div>
    </>
  );
}
