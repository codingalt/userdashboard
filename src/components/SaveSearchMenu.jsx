import React from "react";
import "../sass/SaveSearchMenu/save-search-menu.css";

const SaveSearchMenu = ({ options }) => {
  return (
    <div className="save-search-menu">
      <ul className="shadow border rounded">
        {options.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default SaveSearchMenu;
