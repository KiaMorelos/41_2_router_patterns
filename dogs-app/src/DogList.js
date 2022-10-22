import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}){ 
    return (
        <div>
        {dogs.map(dog => (
          <div key={dog.name} className="dogs">
            <img src={dog.src} alt={dog.name} />
            <h3>
              <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    )
}

export default DogList;