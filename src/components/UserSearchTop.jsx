import React from "react";
import { useState } from "react";
import * as bs from "react-icons/bs";
import * as cg from "react-icons/cg";
import "../css/user-search-top.css";
import Searchbar from "./Searchbar";
import SelectBox from "./SelectBox";
import TimeRangeMenu from "./TimeRangeMenu";

const UserSearchTop = () => {
    const [dateType,setDateType] = useState("text");
    const [timeRange,setTimeRange] = useState(false);

    const handleTimeRangeMenu = ()=>{
      setTimeRange(!timeRange);
    }
   
  return (
    <div className="row user-search-top mx-auto">
      <div className="col-xxl-3 col-lg-4 col-md-6 mb-md-3 mb-3 search-input">
       <Searchbar />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 date" onClick={handleTimeRangeMenu}>
        <label>Time</label>
        <input type="text" readOnly placeholder="Last 1 day" />
        {
            timeRange ? <cg.CgCloseO id="date-icon" />  : <bs.BsFolder id="date-icon" /> 
        }
        
      </div>
      {/* Time Range POPUP Menu  */}
      {timeRange && <TimeRangeMenu />}
      
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 user-select">
      <SelectBox label='User' options='...' />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 company">
       <SelectBox label='Company' options='All Companies' />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 form">
      <SelectBox label='Form' options='...' />
      </div>
      <div className="col-xxl-1 col-lg-4 col-md-6 mb-md-3 mb-3 option-icon">
        <bs.BsThreeDots />
      </div>
    </div>
  );
};

export default UserSearchTop;
