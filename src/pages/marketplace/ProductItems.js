import React from 'react'
import { Link } from 'react-router-dom'
import { toTitleCase } from '../../utils'

export const ProductItems = ({img, title, price, id}) => {
  return (
    <Link to={`/marketplace/${id}`}>
            <div className=' overflow-hidden md:h-[414px] rounded-[15px] md:shadow-[0px_22px_44px_rgba(217,225,244,0.36)] py-5 px-[14px] '>
                <img loading='lazy' src={img} alt="" className='h-[357px] md:h-[280px] w-full rounded-[0.5rem] mb-2.5' />
                <article className='flex md:block justify-between'>
                    <h4 className='text-[22px] leading-[157%] text-grey mb-[18px]'>{toTitleCase(title)}</h4>
                    <p className='font-bold font-grey text-[1.25rem] leading-[157%]'>${price}</p>
                </article>
            </div>
        </Link>
  )
}
 