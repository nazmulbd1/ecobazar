import React from 'react'
import Container from './layouts/Container'


const Testimonial = () => {
  return (
    <Container>
        <div>
            <div>
                <h3 className='text-[32px] font-pop font-bold py-6'>Client Testimonials</h3>
            </div>
        </div>
      {/* <div className='my-15 '>
        <h3 className='font-pop font-semibold text-[32px] text-[#1A1A1A] mb-8'>Client Testimonials</h3>
        <div className='flex gap-6 '>
          <div className='max-w-[424px]'>
            <img src={TestimonialOne} alt="Testimonial One" />
          </div>
          <div className='max-w-[424px]' >
            <img src={TestimonialTwo} alt="Testimonial Two" />
          </div>
          <div className='max-w-[424px]'>
            <img src={TestimonialThree} alt="Testimonial Three" />
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default Testimonial