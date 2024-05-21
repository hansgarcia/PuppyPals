import React, { useState } from 'react';

function PuppyForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPuppy = { name, breed, status };

    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPuppy),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New puppy created:', data);
      })
      .catch(error => console.error('Error creating puppy:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="text" placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} required />
      <input type="text" placeholder="Status" value={status} onChange={e => setStatus(e.target.value)} required />
      <button type="submit">Create Player</button>
    </form>
  );
}

export default PuppyForm;