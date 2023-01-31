import React, { useState } from 'react'
import MultiRangeSlider from '../../components/multisliderrange/MultiSliderRange'
import { CatTitle, CheckBox} from './CatTitle'
import {VscUngroupByRefType} from 'react-icons/vsc'

function SideNav() {
    const [value, setValue] = useState({min: 0, max:100})

    return (
        <aside className='w-[244px] shrink-0 hidden lg:block'>
            <div className='h-[3.75rem] w-[215px] bg-[#F4F2F2] rounded-[15px] flex items-center mb-8'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z" fill="#999999"/>
                </svg>
                <input type="text" placeholder='Search' className='bg-transparent focus:outline-0 text-[#999999]'/>
            </div>

            <div className='mb-8'>
                <div className='text-black text-xl font-medium leading-[157%] flex items-center mb-1'>
                   <VscUngroupByRefType className='w-[50px] h-[60px] mr-4' />
                    <span>Filter</span>
                </div>
                <div className='w-fill h-1.5 rounded-full bg-[#AFB091]'></div>
            </div>

            <div className='mb-8'>
                <CatTitle title="By Category" />
                <div className='transition-all overflow-hidden'>
                    <CheckBox id="editorial" title="Editorial" />
                    <CheckBox id="fashion" title="Fashion" />
                    <CheckBox id="optics" title="Optics" />
                    <CheckBox id="art-meseuum" title="Art & Museum" />
                    <CheckBox id="nature" title="Nature" />
                </div>
            </div>

            <div className="mb-8">
                <CatTitle title="By Price" />
                <div className='transition-all overflow-hidden'>
                    <p className='my-4 mb-8 text-xl text-grey'>${value.min.toFixed(2)} - ${value.max.toFixed(2)}</p>
                    <MultiRangeSlider
                        min={1}
                        max={100}
                        onChange={({ min, max }) => setValue({min: min, max: max})}
                    />
                </div>
            </div>
            <div className="my-8">
                <CatTitle title="By artist" />
                <div className='transition-all overflow-hidden'>
                    <p className='underline mb-4'>All</p>
                    <p className='mb-4 last:mb-0'>Below $100.00</p>
                    <p className='mb-4 last:mb-0'>$100.00 - $150.00</p>
                    <p className='mb-4 last:mb-0'>$150.00 - $200.00</p>
                    <p className='mb-4 last:mb-0'>Above $200.00</p>
                </div>
            </div>
            <div className="mb-4">
                <CatTitle title="Collection year"/>
                <div></div>
            </div>
        </aside>
    )
}

export default SideNav
