import React from 'react';
import { Link, useParams } from "react-router-dom";
import {Redirect} from "react-router-dom";


function Color({colors}) {
    const { color } = useParams();
    const hexCode = colors[color]
    
    if (!hexCode) {
      return <Redirect to="/colors"/>
    }
  
        return (
            <div className="color" style={{backgroundColor: hexCode}}>
                <h1>{color} <br/>
                <Link to="/colors">go to list</Link></h1>
            </div>
        )     
    
}

export default Color;