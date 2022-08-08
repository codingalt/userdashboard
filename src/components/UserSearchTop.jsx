import React from "react";
import { useState } from "react";
import "../sass/UserSearchTop/user-search-top.css";
import Searchbar from "./Searchbar";
import SelectBox from "./SelectBox";
import TimeRangeMenu from "./TimeRangeMenu";

const UserSearchTop = () => {
  const [dateType, setDateType] = useState("text");
  const [timeRange, setTimeRange] = useState(false);

  const handleTimeRangeMenu = () => {
    setTimeRange(!timeRange);
  };

  return (
    <div className="row user-search-top mx-auto">
      <div className="col-xxl-3 col-lg-4 col-md-6 mb-md-3 mb-3 search-input">
        <Searchbar />
      </div>
      <div
        className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 date"
        onClick={handleTimeRangeMenu}
      >
        <label>Time</label>
        <input type="text" readOnly placeholder="Last 1 day" />
        {timeRange ? (
          <i class="bi bi-x-circle" id="date-icon"></i>
        ) : (
          <i class="bi bi-calendar" id="date-icon"></i>
        )}
      </div>
      {/* Time Range POPUP Menu  */}
      {timeRange && <TimeRangeMenu />}

      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 user-select">
        <SelectBox label="User" options="..." />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 company">
        <SelectBox label="Company" options="All Companies" />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 form">
        <SelectBox label="Form" options="..." />
      </div>
      <div className="col-xxl-1 col-lg-4 col-md-6 mb-md-3 mb-3 option-icon">
        <i class="bi bi-three-dots"></i>
      </div>
    </div>
  );
};

export default UserSearchTop;
