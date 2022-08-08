import React, { useContext } from "react";
import * as io from "react-icons/io";
import * as gr from "react-icons/gr";
import { folderMenuContext } from "../contexts/FolderMenu";
import "../sass/FilterTray/filter-tray.css";

const FilterTray = () => {
  const { handleFilterTray } = useContext(folderMenuContext);

  return (
    <div className="shadow border rounded filter-tray">
      <span>2 / 20</span>
      <span>
        <i class="bi bi-chevron-down"></i>
      </span>
      <span>
        <i class="bi bi-chevron-up"></i>
      </span>
      <span onClick={handleFilterTray}>
        <i class="bi bi-x-lg"></i>
      </span>
    </div>
  );
};

export default FilterTray;
