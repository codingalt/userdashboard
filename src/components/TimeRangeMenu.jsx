import React,{useState} from 'react'
import '../css/time-range.css'
import * as bs from 'react-icons/bs'

const TimeRangeMenu = () => {
    const [dateType,setDateType] = useState("text");

  return (
    <div className='time-range border shadow rounded'>
        <div className="left">
            <div>
        <label>From</label>
        <input type="date" placeholder="Last 1 day" />
      
        </div>
        <div>
        <label>To</label>
        <input type="date" placeholder="Last 1 day" />
      
        </div>
        <div>
            <span style={{fontSize:'1rem',color:'var(--blue)'}}>Apply Time Rang</span>
        </div>
        </div>
        <div className="right">
            <ul>
                <li>Last 30 min</li>
                <li>Last 1 hour</li>
                <li>Last 2 hour</li>
                <li>Last 4 hour</li>
                <li>Last 1 day</li>
                <li>Last 2 day</li>
                <li>Last 1 Week</li>
            </ul>
        </div>
    </div>
  )
}

export default TimeRangeMenu