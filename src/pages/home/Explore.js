import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

export const Explore = ({link,content}) => {
  return (
    
    <div className='text-[1.5rem] md:text-[2.5rem] font-medium px-4 md:px-0 py-5 md:p-8 border-y border-y-grey color-grey last:border-t-[0] hover:px-8 cursor-pointer'>
    <Link to={link}>
        <div className="container mx-auto flex items-center justify-between">
            <span>{content}</span>
            <svg className='md:hidden mr-9' width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27.5" cy="26.5" r="26.25" stroke="black" strokeWidth="0.5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 27C10 26.6759 10.1279 26.3651 10.3556 26.1359C10.5833 25.9067 10.8922 25.7779 11.2142 25.7779H39.8525L32.2103 18.0888C31.9823 17.8593 31.8542 17.5481 31.8542 17.2236C31.8542 16.8991 31.9823 16.5879 32.2103 16.3584C32.4383 16.1289 32.7475 16 33.07 16C33.3924 16 33.7016 16.1289 33.9296 16.3584L43.6433 26.1348C43.7564 26.2483 43.8461 26.3832 43.9073 26.5316C43.9685 26.6801 44 26.8393 44 27C44 27.1607 43.9685 27.3199 43.9073 27.4684C43.8461 27.6168 43.7564 27.7517 43.6433 27.8652L33.9296 37.6416C33.7016 37.8711 33.3924 38 33.07 38C32.7475 38 32.4383 37.8711 32.2103 37.6416C31.9823 37.4121 31.8542 37.1009 31.8542 36.7764C31.8542 36.4519 31.9823 36.1407 32.2103 35.9112L39.8525 28.2221H11.2142C10.8922 28.2221 10.5833 28.0933 10.3556 27.8641C10.1279 27.6349 10 27.3241 10 27Z" fill="#616161"/>
                    </svg>
            <MdOutlineKeyboardArrowDown className='md:mr-[150px] text-blue hidden md:block' width="75" height="68" />
        </div>
        </Link>
    </div>
  )
}
