import React from "react";
import * as bs from "react-icons/bs";
import "../sass/ResultCard/resultCard.css";

const ResultCard = () => {
  return (
    <div className="container p-3 result-card">
      <div className="search-for">
        <div>
          <i class="bi bi-search"></i>
        </div>
        <span>What can i search for you?</span>
      </div>
    </div>
  );
};

export default ResultCard;
