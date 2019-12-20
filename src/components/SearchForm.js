import React, { useState } from "react";

export default function SearchForm(props) {

  const { onSearch } = props;

  const [search, setSearch] = useState('');

  const updateSearchTerm = e => {
    setSearch(e.target.value);
  };

  const doSearch = e => {
    e.preventDefault();
    onSearch(search);
  };
 
  return (
    <section className="search-form">
     <form onSubmit={doSearch}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={updateSearchTerm}
      />
     </form>
    </section>
  );
}
