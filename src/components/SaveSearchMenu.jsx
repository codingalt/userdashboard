import React from 'react'

const SaveSearchMenu = ({options}) => {
    const styles = {
        height: '100%',
        width: '16rem',
        padding: '.8rem .8rem',
        position:'absolute',
        top:'1.2rem',
        right:'1rem',
        zIndex: '999999',
    }
    const liStyles = {
        cursor:'pointer',
        padding: '.5rem 0rem',
        fontSize:'16px',
        fontWeight:'400'
    }
  return (
    <div className='save-search-menu' style={styles}>
        <ul className='shadow border rounded' style={{color:'var(--blue)',zIndex:'99999',background:'#fff',padding:'1rem 1rem'}}>
           {
            options.map((data,i)=>{
                return <li key={i} style={liStyles}>{data}</li>
            })
           }
            {/* <li style={liStyles}>Audit</li>
            <li style={liStyles}>Save Searching Crtiteria</li>
            <li style={liStyles}>Show Saved Searching Criteria</li>
            <li style={liStyles}>Reset Filters</li> */}
        </ul>
    </div>
  )
}

export default SaveSearchMenu