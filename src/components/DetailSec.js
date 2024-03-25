import React from 'react'
import "./style/DetailSec.css"
const DetailSec = ({ Title,className, SubHeading, buttonText, imageSrc}) => {
  return (
    <div className={`DetailSec-sec ${className}`} >
        <div className='DetailSec-container'>
            
            <div className='DetailSec-title'>
                <h1>{Title}</h1>
                <p>{SubHeading}</p>
            </div>
            <div className='DetailSec-img'>
                <img src={imageSrc} />
            </div>
        </div>
    </div>
  )
}

export default DetailSec