import React from "react";

const Searchbar = () => {
  return (
    <>
      <input type="text" id="searchbar" placeholder="Search" />
      <i className="search-icon bi bi-search" id="search-icon"></i>
    </>
  );
};

export default Searchbar;
