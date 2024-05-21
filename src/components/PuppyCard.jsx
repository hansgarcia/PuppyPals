import React from 'react';

function PuppyCard({ puppy, onDelete }) {
  const deletePuppy = () => {
    fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${puppy.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Puppy deleted:', data);
        onDelete(puppy.id);
      })
      .catch(error => console.error('Error deleting puppy:', error));
  };

  return (
    <div className="puppy-card">
      <h2>{puppy.name}</h2>
      <p>Breed: {puppy.breed}</p>
      <button onClick={() => window.location.href = `/puppy/${puppy.id}`}>See Details</button>
      <button onClick={deletePuppy}>Delete Player</button>
    </div>
  );
}

export default PuppyCard;
