import React from "react";
import "../sass/SearchResultCard/search-result-card.css";
import SelectBox from "./SelectBox";
import * as ai from "react-icons/ai";

const SearchResultCard = () => {
  return (
    <div className="container p-3 px-lg-4 result-card s-result-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className=" d-flex flex-row align-items-center">
          <label>Search by changes in</label>
          <select id="select" className="form-select">
            <option>FieldName</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
        <div className="approx-res">
          <span>Approx. 125 results</span>
        </div>
      </div>

      <div className="search-content-wrapper">
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
          <span className="star-icon">
            <i class="bi bi-star-fill"></i>
          </span>
          <div className="time">
            <span>1 Month ago</span>
          </div>
        </div>
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
          <span className="star-icon">
            <i class="bi bi-star"></i>
          </span>
          <div className="time">
            <span>1 Month ago</span>
          </div>
        </div>
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
          <span className="star-icon">
            <i class="bi bi-star"></i>
          </span>
          <div className="time">
            <span>1 Month ago</span>
          </div>
        </div>
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
        </div>
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
        </div>
        <div className="content-inner">
          <div className="title">
            <span>13/05//KR/2022</span>
          </div>
          <div className="sub-title">
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
            <span>User Session:</span>
            <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
          </div>
        </div>
      </div>
    </div>
    // Container ends
  );
};

export default SearchResultCard;
