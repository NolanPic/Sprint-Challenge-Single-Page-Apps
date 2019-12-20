import React, { useState } from "react";

export default function SearchForm() {

  const [search, setSearch] = useState('');

  const updateSearch = e => {
    setSearch(e.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={updateSearch}
      />
     </form>
    </section>
  );
}
