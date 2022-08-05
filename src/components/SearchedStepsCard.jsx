import React, { useState,useContext } from 'react'
import '../css/searched-steps-card.css'
import * as bs from 'react-icons/bs'
import * as gr from 'react-icons/gr'
import SelectBox from "./SelectBox";
import SearchbarWithDropdown from './SearchbarWithDropdown';
import StepsTable from './StepsTable';
import SaveSearchMenu from './SaveSearchMenu';
import { folderMenuContext } from '../contexts/FolderMenu'
import FilterTray from './FilterTray';


const SearchedStepsCard = () => {
  const [openMenu,setOpenMenu] = useState(false);
  const [dateType,setDateType] = useState("text");
  const {filterTray} = useContext(folderMenuContext);

  const handleMenu = ()=>{
    setOpenMenu(!openMenu);
  }

  const SearchMenuOptions = ["Audit","Save Searching Crtiteria","Show Saved Searching Criteria","Reset Filters"];

  return (
    <>
        <div className='container p-3 result-card steps-card'>
          <div className="top-info">
            <div className="left">
              <span>Steps of 13/05/2022</span>
            </div>
            <div className="center">
              <div>
                <span>User Session: </span>
                <span>2022-06-22 07:48:34.561 - 2022-06-22 14:43:21.143</span>
              </div>
              <div>
                <span>User: </span>
                <span>nat.ziaj@domb.pl</span>
              </div>
              <div>
                <span>1 Month ago</span>
              </div>
            </div>
            <div className="right" onClick={handleMenu}>
           {openMenu ? <gr.GrClose style={{color:'red',fontSize:'1rem'}} /> : <bs.BsThreeDots />} 
            </div>

            {/* POP Up Menu  */}
           {openMenu && <SaveSearchMenu options={SearchMenuOptions} /> }


          </div>
          {/* Top info ends  */}

          {/* Search and select options  */}
          <div className="row user-search-top mx-auto">
      <div className="col-xxl-3 col-lg-4 col-md-6 mb-md-3 mb-3 search-input">
       <SearchbarWithDropdown />
      </div>

        {/* Filter Tray  */}
    {filterTray && <FilterTray />}

      <div className="col-xxl-3 col-lg-4 col-md-6 mb-md-3 mb-3 date">
        <label id='label'>Time from</label>
        <input type={dateType} onClick={()=>{setDateType("date")}} placeholder="Last 1 day" />
        {
            dateType === "text" ? <bs.BsFolder id="date-icon" /> : '' 
        }
                
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 date">
      <label id='label'>To</label>
        <input type={dateType} onClick={()=>{setDateType("date")}} placeholder="Last 1 day" />
        {
            dateType === "text" ? <bs.BsFolder id="date-icon" /> : '' 
        }
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 company">
       <SelectBox label='Company' options='All Companies' />
      </div>
      <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 form">
      <SelectBox label='Form' options='...' />
      </div>
     
    </div>
          {/* Search and select option div ends  */}

          {/* Table start */}

          <StepsTable />

          {/* Table ends  */}


        </div>
        {/* steps-card-end  */}
    </>
  )
}

export default SearchedStepsCard