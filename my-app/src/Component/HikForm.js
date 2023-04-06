import React, {useState} from 'react'

export default function HikForm(props) {
    const [text , settext]= useState("Enter the text here")
    // let text =text new one -(wrong way to change the value or text)
    // settext("text new one");//right way to change the param
  const textReader = (e)=>{
    settext(e.target.value);
  }
  const caseChange1 = ()=>{ 
    settext(text.toUpperCase())
  }
  const caseChange2 = ()=>{
    settext(text.toLowerCase())
  }
  const caseChange3 = ()=>{
    settext(text.length)
  }
  const caseChange4 = ()=>{
    settext(text.length)
  }
  const caseclear = ()=>{
    let newtext='';
    settext(newtext)
  }
  return (

    <>
    <div>
   <h1> {props.heading}</h1>

  <div>
  <textarea className="form-control" value={text} onChange={textReader} id="exampleFormControlTextarea1" rows="3"></textarea><br/>
  </div>
  <button className="btn btn-primary mx-2" onClick={caseChange1}>CHANGE TO UPPERCASE</button>
  <button className="btn btn-secondary mx-2" onClick={caseChange2}>CHANGE TO LOWERCASE</button>
  <button className="btn btn-success mx-2" onClick={caseChange3}>changecolorintogreen</button>
  <button className="btn btn-danger mx-2" onClick={caseChange4}>Changecolorintored</button>
  <button className="btn btn-info" onClick={caseclear}>Cleartext</button>
</div>
<div className="container">
  <h1>This is result of above text form</h1>
  <p> {text.split(" ").length} Words and  {text.length}Characters</p>
  <p> {0.008*text.split(" ").length}Time taken to read</p>
  <h2>PREVIEW</h2>
  <p>{text}</p>
</div>
</>

  )
}
