import React from 'react'
import * as bs from 'react-icons/bs'
import '../css/result-card.css'

const ResultCard = () => {
  return (
    <div className='container p-3 result-card'>
        <div className="search-for">
            <div>
                <bs.BsSearch />
            </div>
            <span>What can i search for you?</span>
        </div>
    </div>
  )
}

export default ResultCard