import React,{useState} from 'react'
import '../css/searched-steps-card.css'
import * as bs from 'react-icons/bs'
import SelectBox from "./SelectBox";
import SearchbarWithDropdown from './SearchbarWithDropdown';
import SaveSearchMenu from './SaveSearchMenu';
import AuditTable from './AuditTable';

const AuditStepsCard = () => {
    const [openMenu,setOpenMenu] = useState(false);

    const handleMenu = ()=>{
      setOpenMenu(!openMenu);
    }
  
    const SearchMenuOptions = ["Reset Filters"];
  return (
    <>
    <div className='container p-3 result-card steps-card'>
      <div className="top-info">
        <div className="left">
          <span>Audit of 13/05/2022</span>
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
        <bs.BsThreeDots />
        </div>

        {/* POP Up Menu  */}
       {openMenu && <SaveSearchMenu options={SearchMenuOptions} /> }


      </div>
      {/* Top info ends  */}

      {/* Search and select options  */}
      <div className="row user-search-top mx-auto">
  <div className="col-xxl-4 col-lg-4 col-md-6 mb-md-3 mb-3 user-select">
  <SelectBox label='From' options='All Purchase Order:Purch Table' />
  </div>
  <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3" style={{display:'flex',alignItems:'center',gap:'.8rem'}}>
    <input type="checkbox" style={{transform:'scale(1.5)'}} />
    <label id='label'>Important Fields</label>      
  </div>
  <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3" style={{display:'flex',alignItems:'center',gap:'.8rem'}}>
    <input type="checkbox" style={{transform:'scale(1.5)'}} />
    <label id='label'>Difference</label>      
  </div>
  <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3" style={{display:'flex',alignItems:'center',gap:'.8rem'}}>
    <input type="checkbox" style={{transform:'scale(1.5)'}} />
    <label id='label'>Changed</label>      
  </div>
  <div className="col-xxl-2 col-lg-4 col-md-6 mb-md-3 mb-3" style={{display:'flex',alignItems:'center',gap:'.8rem'}}>
    <input type="checkbox" style={{transform:'scale(1.5)'}} />
    <label id='label'>Last Values</label>      
  </div>
 


 
</div>
      {/* Search and select option div ends  */}

      {/* Table start */}

      <AuditTable />

      {/* Table ends  */}


    </div>
    {/* steps-card-end  */}
</>
  )
}

export default AuditStepsCard