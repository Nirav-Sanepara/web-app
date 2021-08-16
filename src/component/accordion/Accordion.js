import React, { useState } from 'react'
import { questions } from './api';
import "./accordion.css";
import Myaccordion from "./Myaccordion"

const Accordion=()=>{

    const [data,setData]=useState(questions)
    
    return(
        <>
        <section className="main-div">
        <h1>react intreview question</h1>
            {
                data.map((curElem)=>{
                    const {id}=curElem;
                    return <Myaccordion key={id} {...curElem}/>;
                })
            }
        </section>
        </>
           
        )
    
}

export default Accordion;