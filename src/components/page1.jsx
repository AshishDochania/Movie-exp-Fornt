import React, { useState } from 'react';
import "../App.css";

function SearchBar({ onSearch }){
  const [query, setQuery] = useState('');
  const [margin,changeMarg]=useState(false);

  function handleSearch(){
    onSearch(query);
  };

  return (
    <div className='searchBar'
    style={{marginTop:margin && "8%" }}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search by title" 
      />
      <button onClick={()=>{handleSearch();changeMarg(true);}}>Search</button>
    </div>
  );
};

export default SearchBar;
