import React,{useContext, useState} from 'react'
import '../css/steps-checked-all.css'
import * as bs from 'react-icons/bs'
import * as gr from 'react-icons/gr'
import * as io from 'react-icons/io'
import Searchbar from "./Searchbar";
import SelectBox from "./SelectBox";
import SearchbarWithDropdown from './SearchbarWithDropdown';
import StepsTable from './StepsTable';
import FilterTray from './FilterTray'
import SaveSearchMenu from './SaveSearchMenu';
import { folderMenuContext } from '../contexts/FolderMenu'

const SearchedStepsCheckedAll = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const [isVisible,setIsVisible] = useState(true);
    const [dateType,setDateType] = useState("text");
    const {filterTray} = useContext(folderMenuContext);

  const SearchMenuOptions = ["Export to EA Files","Audit","Save Searching Crtiteria","Show Saved Searching Criteria","Reset Filters"];

    const handleTabsTable = ()=>{
        setIsVisible(!isVisible);
    }

    const handleMenu = ()=>{
      setOpenMenu(!openMenu);
    }
 
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
    
  <div className="col-xxl-3 col-lg-4 col-md-6 mb-md-3 mb-3 date" onClick={()=>{setDateType("date")}}>
    <label id='label'>Time from</label>
        <input type={dateType} placeholder="Last 1 day" />
        {
            dateType === "text" ? <bs.BsFolder id="date-icon" /> : '' 
        }
    
  </div>
  <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3 date" onClick={()=>{setDateType("date")}}>
    <label id='label'>To</label>
        <input type={dateType} placeholder="Last 1 day" />
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
      {/* Search and select option ends  */}

      {/* Table start */}

      <div className="checked-all">
        <div className="row">
        <div className="col-lg-8 col-md-7" style={{borderRight:'1.8px solid #A9ADC6'}}>
       <StepsTable />
       </div>
       <div className="col-lg-4 col-md-5 right-side">
        <div className="header">
            <span>Selected Steps</span>
            <span onClick={handleTabsTable}><gr.GrClose /></span>
        </div>
        <div className=" d-flex justify-content-between">
            <div>
                <span>9</span>
                <span>Click Ok</span>
            </div>
            <div className='icon' onClick={handleTabsTable}>
              {isVisible ? <io.IoIosArrowUp /> : <io.IoIosArrowDown />}
                
            </div>
        </div>
        {/* Tabs  */}
        {isVisible &&
        <div className="tabs-table-wrapper">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#buisnessContext" type="button" role="tab" aria-controls="buisnessContext" aria-selected="true">Buisness Context</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="false">General</button>
  </li>
</ul>

{/* Display response by onclicking tabs  */}

{/* <div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="buisnessContext" role="tabpanel" aria-labelledby="home-tab">
    ...
  </div>
  <div className="tab-pane fade" id="general" role="tabpanel" aria-labelledby="profile-tab">
    ...
  </div>
</div> */}

        <div className="table-responsive">
            <table className="table table-striped table-hover">
              <tbody style={{fontSize:'.9rem'}}>
                <tr>
                    <td>Time</td>
                    <td>06-07-2021 8:48:28.298</td>
                </tr>
                <tr>
                    <td>Religion</td>
                    <td>(Not set)</td>
                </tr>
                <tr>
                    <td>Path</td>
                    <td>\project management and...</td>
                </tr>
                <tr>
                    <td>From Caption</td>
                    <td>Create Project</td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td>usmf</td>
                </tr>
                <tr>
                    <td>Platform</td>
                    <td>Microsoft Dynamix AX 2012</td>
                </tr>
                <tr>
                    <td>Enviroment</td>
                    <td>V_DEV</td>
                </tr>
                <tr>
                    <td>Value</td>
                    <td>(not set)</td>
                </tr>
                <tr>
                    <td>Duration</td>
                    <td>0:04</td>
                </tr>
              </tbody>
            </table>
        </div>

        <div className=" d-flex justify-content-between mt-0">
            <div>
                <span>10</span>
                <span>Click Ok</span>
            </div>
            <div className='icon'>
                <io.IoIosArrowDown />
            </div>
        </div>

        </div>
        }
        {/* Tabs table wrapper div ends  */}


       </div>
       </div>

      </div>


    </div>
    {/* steps-card-end  */}
</>
  )
}

export default SearchedStepsCheckedAll