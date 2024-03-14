import React , {useState} from "react";
import satData from './satData';
import './styling.css';
//task1
export default function Banner(){
    return(
        <header><h1>Orbit Report</h1>
        <p>Click on the buttons to see the satellites in that orbit type.</p>
        </header>
    );
}

