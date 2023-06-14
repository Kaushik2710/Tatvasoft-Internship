import React,{useState} from 'react'
import {Button} from "@material-ui/core";

export default function First(){
    const [inr,setInce]=useState(0);
    const [dcr,setDcr]=useState(inr);
   

    const increeemnt=()=>{
     
        setInce(inr+1);
    }
    const dcreeemnt=()=>{
       
        setDcr(dcr-1);
    }
    let t=inr+dcr;
    return (

<>
    <h1>This is first</h1>
    <Button onClick={increeemnt} variant ="contained" color="secondary">Increment</Button>
    <Button onClick={dcreeemnt} variant ="contained" color="danger">Decrement</Button>
    
    <p > THe value is {t}</p>
    </>
    );
}