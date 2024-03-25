import React from 'react'
import "./style/ServicesExplain.css"
import { Button} from 'reactstrap';
const ServicesExplain = ({Title, SubHeading, buttonText,  imageSrc,className,logo}) => {
  return (
    <section className='ServicesExplain-sec'>
        <div className='ServicesExplain-container'>
            <div className='ServicesExplain-img-sec'>
                <img src={imageSrc} alt="Description of the main image" />
            </div>
            <div className='ServicesExplain-title-sec'>
                <img src={logo} alt="Description of the main image" />
                <h1 className='h1-text'>{Title}</h1> {/* Ensure that <h1> is used once per page for the main title */}
                <p className="p-text">{SubHeading}</p>
                <Button className={`btn-sec ${className}`} aria-label="Describe action here" href="/ContactUs">{buttonText} <img src='/Arrow 1.svg'/></Button>
            </div>
        </div>
    </section>
  )
}

export default ServicesExplain