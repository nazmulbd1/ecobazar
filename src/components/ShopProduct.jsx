import { Container } from 'lucide-react'
import React from 'react'

const ShopProduct = ( {allData} ) => {
  return (
    <div className='grid grid-cols-3 gap-2'>
        {allData.map((item, index) => (
            <div className='text-[#4D4D4D] px-4 py-4 border border-1 border-gray-300'>
                <img src={item.thumbnail} alt="item.thumbnail" className='w-full' />
                {item.name}
                <div>
                    <h3>{item.title}sdffd</h3>
                    <p>{item.price}</p>
                    <p>{item.rating}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ShopProduct