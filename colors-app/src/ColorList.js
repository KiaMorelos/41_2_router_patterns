import React from 'react';
import { Link } from "react-router-dom";


function ColorList({colors}){
  const colorLi = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

    return (
        <> 
        <div className='container'>        
            <Link to="/colors/new">Add a color</Link>
        </div>
       <div className="ColorList">
         <ul>
            {colorLi}
        </ul>
       </div>
       </>

    )
}

export default ColorList;