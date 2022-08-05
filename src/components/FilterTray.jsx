import React,{useContext} from 'react'
import * as io from 'react-icons/io';
import * as gr from 'react-icons/gr';
import { folderMenuContext } from '../contexts/FolderMenu'

const FilterTray = () => {
    const {handleFilterTray} = useContext(folderMenuContext);
    const filterTray = {
        width: '198px',
        height:'38px',
        padding:'1rem 1rem',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        background:'#fff',
        position:'absolute',
        top:'2.2rem',
        left:'8rem',
        zIndex:'99999',
    }
  return (
    <div className='shadow border rounded filter-tray' style={filterTray}>
        <span style={{color:'#737779',fontSize:'14px',fontWeight:'500'}}>2 / 20</span>
        <span style={{color:'var(--blue)',cursor:'pointer',fontSize:'1.1rem'}}><io.IoIosArrowDown /></span>
        <span style={{color:'var(--blue)',cursor:'pointer',fontSize:'1.1rem'}}><io.IoIosArrowUp /></span>
        <span onClick={handleFilterTray} style={{color:'var(--blue)',cursor:'pointer',fontSize:'.8rem'}}><gr.GrClose /></span>
    </div>
  )
}

export default FilterTray