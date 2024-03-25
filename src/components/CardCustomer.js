import React from 'react'
import "./style/CardCustomer.css"
export const CardCustomer = ({SubHeading,imageSrc,Title,SubProfile}) => {
  return (
    <div className='card-customer'>
        <p className="p-opinion">{SubHeading}</p>
        <div className='profile-card'>
        <img src={imageSrc} alt="Description of the main image" className='img-profile'/>
        <div>
          <h6 className='h6-profile'>{Title}</h6>
          <p className="p-profile">{SubProfile}</p>
        </div>
        </div>
    </div>
  )
}
