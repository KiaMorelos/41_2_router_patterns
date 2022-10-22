import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

function DogDetails({dogs}){
    const { name } = useParams();

      if (name) {
        const currentDog = dogs.find(
          dog => dog.name === name
      ); 

      if(!currentDog){
        return <Redirect to="/dogs"/>
      }

        const facts = currentDog.facts.map(fact => (
            <li key={fact}>{fact}</li>
          ));
        
          return (
            <div className="details">
                <h1>{currentDog.name}</h1>
                <p>Age: {currentDog.age}</p>
                <img src={currentDog.src} alt={currentDog.name} />
                <ul>
                    {facts}
                </ul>
            </div>
        )      
    } 
      
}

export default DogDetails;