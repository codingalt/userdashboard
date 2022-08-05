import React from 'react'

const SelectBox = ({label,options}) => {
  return (
    <>
         <label id='label'>{label}</label>
        <select id='select' className="form-select">
          <option>{options}</option>
        </select>
    </>
  )
}

export default SelectBox