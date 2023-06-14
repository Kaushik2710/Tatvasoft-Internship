import React, {useState} from 'react'


export default function Textform(props) {
    const handle=()=>{
        // console.log("ipoasdfpla" );
        let nt=text.toUpperCase();
        setText(nt);
    }
    const handlelow=()=>{
        // console.log("ipoasdfpla" );
        let nt=text.toLowerCase();
        setText(nt);
    }
    const handlechange=(event)=>{
        // console.log("change" );
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // console.log(useState('enterrrrrr'));
    // setText("enterrr");
  return (
    <>
    <div className="container"  style={{ color:props.mode==='dark'?'white':'black'}}>  

            <h1 >{props.heading}</h1>
            <div className="mb-3">

            <textarea className="form-control" value={text}  style={{ backgroundColor :props.mode==='light'?'white':'grey',
            color:props.mode==='dark'?'white':'black'}}
            onChange={handlechange}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handle}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlelow}>Convert to Loweercase</button>
    </div>
    <div className='container my-3'  style={{ color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary </h1>
      <p>{text.split(/\s+/).filter((a1)=>{return a1.length!==0}).length} words, {text.length} characters </p>
      <p>{0.008 * text.split(' ').length} time to read </p>
      <h3>Preview </h3>
<p>
  {text.length>0?text:"enter something to preview"}
</p>

    </div>
    </>

  )
}
