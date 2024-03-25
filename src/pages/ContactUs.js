import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/ContactUs.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CardCustomer } from '../components/CardCustomer';
import RECAPTCHA from 'react-google-recaptcha';


function ContactForm() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [capVal, setCapVal] = useState(null)
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., send data to a server.
    console.log(formData);
  };

  return (
    <>
      <NavBar/>
      <div className='contact-sec'>
        <div className='contact-container'>
          <div className='contact-title'>
            <div>
              <h1>Do you have an idea in mind? We'd love to hear from you.</h1>
              <p>We’re happy to talk about your project details. Share your thoughts with us, or hit us up to simply learn about the services we have to offer.</p>
            </div>
            <div className='happy-clients'>
              <h2>
                Meet our happy clients
              </h2>
              <div className="slider-sec slider-contact">
                <Swiper
                
                  breakpointsInverse={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    1030: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
                  
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={0}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false, // This ensures autoplay will not be disabled after user interaction
                  }}
                  loop={true} // Enable looping of slides
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide><SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide><SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CardCustomer 
                      SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                      Title="Sally Baalbaki"
                      SubProfile="CEO, Decoration one"
                      imageSrc="/coding.gif"
                    />
                  </SwiperSlide>
                  {/* ... other SwiperSlides ... */}
                </Swiper>
              </div>
            </div>
          </div>
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
            <div className='label-sec'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder='Name'
                            />
                            </div>
                            <div className='label-sec'>
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel" // Use type "tel" for phone numbers
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder='Phone number'
                            />
                            </div>
                            
                            <div className='label-sec'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder='emailaddress@email.com'
                            />
                            </div>
                            <div className='label-sec'>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder='Massage'
                            />
                            </div>
                            <RECAPTCHA sitekey="6Lczn1EoAAAAANkOd0qmjLegXvq1pa9zJND4LTCv"

onChange={(val) => { setCapVal(val) }}
/>
<input type="hidden" name="_gotcha" style={{ display: 'none' }} />
              {/* ... form fields ... */}
              <button type="submit" className='btn-sec'>Send Email</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactForm;
