import React from 'react'
import image from  '../../assets/upcoming-image.jpg'
import { Link } from 'react-router-dom'

export const AuctionHome = () => {
    const styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%), url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    
    <div className="container mx-auto p-[25px] md:px-0">
        <h2 className='hidden md:block text-[2.5rem] mb-[38px] font-medium leading-[120%] underline text-white underline-offset-[17px] decoration-[0.8px]'>See Upcoming Auctions and Exhibitions</h2>
        <div style={styles} className='h-[350px] image-bg md:h-[556px] text-white p-4 md:px-8 md:pb-[52px] flex flex-col lg:flex-row lg:items-end justify-end relative overflow-hidden'>
            <article className='lg:w-3/5 flex items-center'>
                <h2 className='font-bellefair text-[2.5rem] md:text-[77px] text-[#E1E1E1] mr-5'>01</h2>
                <div className='relative'>
                    <div className='h-4 w-4 bg-[#F5F5F5] rounded-full absolute top-1 -left-6'></div>
                    <h3 className='text-xl md:text-[29px] font-bellefair leading-[120%] md:max-w-[353px]'>MONALISA REDEFINED IN STYLE.</h3>
                    <p className='text-xs md:text-[13.64px] leading-[20px] font-poppin mt-4 mb-3'>Start on : 08:00 GTS . Monday </p>
                    <p className='text-[10px] md:text-base font-medium tracking-[0.065em]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                </div>
            </article>
            <div className='ml-auto mt-4 lg:mt-0 text-sm md:text-2xl'>
                <Link to="/auctions"><span className='underline mr-[20px] mb-3.5'>See more</span></Link>
                <Link to="/drop"><button className='border rounded-[10px] px-3.5 py-[14px]'>Set a reminder</button></Link>
            </div>
        </div>
        <div className='flex items-center justify-between mt-[21px] hidden md:flex'>
            <div className='w-[295.69px] rounded-full h-2.5 bg-[#AEAEAE] overflow-hidden'>
                <div className='w-1/5 h-full bg-white rounded-full'></div>
            </div>
            <div className='flex gap-5'>
                <button className="rounded-btn shadow-3xl bg-white/[0.2]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_433_225)">
                            <path d="M8.94469 9.85521L12.791 6.00888L11.6923 4.91016L6.74724 9.85521L11.6923 14.8003L12.791 13.7015L8.94469 9.85521Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_433_225">
                                <rect width="18.6488" height="18.6488" fill="white" transform="matrix(-1 0 0 1 19.1798 0.530762)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button className='rounded-btn shadow-3xl bg-white/[0.2]'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_433_222)">
                            <path d="M10.915 9.85521L7.06873 6.00888L8.16745 4.91016L13.1125 9.85521L8.16745 14.8003L7.06873 13.7015L10.915 9.85521Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_433_222">
                                <rect width="18.6488" height="18.6488" fill="white" transform="translate(0.679932 0.530762)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    </div>

  )
}
