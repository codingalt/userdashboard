import React, { useContext } from "react";
import "../sass/searchbarDropdown/searchbar-dropdown.css";
import { folderMenuContext } from "../contexts/FolderMenu";

const SearchbarWithDropdown = () => {
  const { handleFilterTray } = useContext(folderMenuContext);
  return (
    <>
      <div className="dropdown-searchbar">
        <input type="text" id="searchbar" placeholder="Search" />
        <i className="search-icon bi bi-search" id="search-icon"></i>
        <div className="arrow-down" onClick={handleFilterTray}>
          <span>
          <i class="bi bi-caret-down-fill"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchbarWithDropdown;
