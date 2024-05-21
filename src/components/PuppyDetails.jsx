import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PuppyDetails() {
  const { id } = useParams();
  const [puppy, setPuppy] = useState(null);

  useEffect(() => {
    fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`)
      .then(response => response.json())
      .then(data => setPuppy(data.data.player))
      .catch(error => console.error('Error fetching puppy:', error));
  }, [id]);

  if (!puppy) return <p>Loading...</p>;

  return (
    <div>
      <h1>{puppy.name}</h1>
      <p>Breed: {puppy.breed}</p>
      <p>Status: {puppy.status}</p>
      {/* Owner and Team details might need additional requests if not included */}
    </div>
  );
}

export default PuppyDetails;
