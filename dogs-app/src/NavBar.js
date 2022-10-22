import React from "react";
import {NavLink} from "react-router-dom";

function Nav({dogs}) {
    const navItem = dogs.map(dog => (
      <NavLink key={dog.name} to={`/dogs/${dog.name}`} >
        {dog.name}
      </NavLink>
    ));
    return (
      <nav>
        <NavLink exact to="/dogs">Home</NavLink>
        {navItem}
      </nav>
    );
  }

  export default Nav;
