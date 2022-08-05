import React from 'react'
import '../css/search-result-card.css'
import SelectBox from './SelectBox'
import * as ai from 'react-icons/ai'

const SearchResultCard = () => {
  return (
    <div className='container p-3 px-lg-4 result-card'>
        <div className="d-flex justify-content-between align-items-center">
            <div className=' d-flex flex-row align-items-center'>
                <label>Search by changes in</label>
                <select id='select' className='form-select' style={{width:'10rem', marginLeft:'.9rem'}}>
                    <option>FieldName</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                </select>
            </div>
            <div>
                <span style={{color:'#737779',fontSize:'15px'}}>Approx. 125 results</span>
            </div>
        </div>

        <div className="search-content-wrapper">
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>        
                    </div> 
                    <span className='star-icon'><ai.AiFillStar /></span> 
                    <div className="time">
                        <span>1 Month ago</span>
                    </div>    
            </div>
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                    </div>   
                    <span className='star-icon'><ai.AiOutlineStar /></span> 
                    <div className="time">
                        <span>1 Month ago</span>
                    </div>    
            </div>
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                    </div>     
                    <span className='star-icon'><ai.AiOutlineStar /></span> 
                    <div className="time">
                        <span>1 Month ago</span>
                    </div>  
            </div>
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                    </div>      
            </div>
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                    </div>      
            </div>
            <div className="content-inner">
                <div className="title">
                    <span>13/05//KR/2022</span>
                </div>
                    <div className="sub-title">
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                        <span>User Session:</span>
                        <span>2022-06-22 08:48:34:561 - 2022-06-22 15:43:21 143</span>
                    </div>      
            </div>


        </div>


    </div>
    // Container ends 
  )
}

export default SearchResultCard