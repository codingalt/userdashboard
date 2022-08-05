import React, { useContext } from 'react'
import '../css/searchbar-dropdown.css'
import * as ti from 'react-icons/ti'
import * as bs from 'react-icons/bs'
import { folderMenuContext } from '../contexts/FolderMenu'

const SearchbarWithDropdown = () => {
  const {handleFilterTray} = useContext(folderMenuContext);
  return (
    <>
        <div className="dropdown-searchbar" style={{position:'relative'}}>
         <input type="text" id='searchbar' placeholder="Search" />
        <bs.BsSearch className="search-icon" style={{right:'3.2rem'}} id='search-icon' />
        <div className='arrow-down' onClick={handleFilterTray}>
            <span><ti.TiArrowSortedDown /></span>
        </div>
        </div>
    </>
  )
}

export default SearchbarWithDropdown