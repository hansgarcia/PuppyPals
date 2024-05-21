import React, { useState, useEffect } from 'react';
import PuppyCard from './PuppyCard.jsx';

function PuppyList() {
  const [puppies, setPuppies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players')
      .then(response => response.json())
      .then(data => setPuppies(data.data.players))
      .catch(error => console.error('Error fetching puppies:', error));
  }, []);

  const handleDelete = (id) => {
    setPuppies(puppies.filter(puppy => puppy.id !== id));
  };

  const filteredPuppies = puppies.filter(puppy => puppy.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <input type="text" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="container">
        {filteredPuppies.map(puppy => (
          <PuppyCard key={puppy.id} puppy={puppy} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default PuppyList;
