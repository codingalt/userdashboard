import React from 'react'
import * as bs from "react-icons/bs";

const Searchbar = () => {
  return (
    <>
    <input type="text" id='searchbar' placeholder="Search" />
        <bs.BsSearch className="search-icon" id='search-icon' />
    </>
  )
}

export default Searchbar