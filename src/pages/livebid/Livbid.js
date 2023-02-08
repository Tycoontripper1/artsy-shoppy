import { Link, useParams } from 'react-router-dom'
import {RxArrowRight, RxCross1} from 'react-icons/rx'
import {AiFillEye} from 'react-icons/ai'
import {VscArrowRight} from 'react-icons/vsc'

import { Bidders } from './Bidders'

function Livebid({prodId, handleClick, auctionProduct}) {
    const {productId} = useParams()
    const currentBid = auctionProduct.find(item => item.id == prodId)

    return (
        <div className="container mx-auto md:pb-16">
            <div className="max-w-[1064px] mx-auto ">
                <p className='text-[#BCB7B7] hidden md:block my-8'><Link to="/">Home</Link>/ <Link to="/auctions">Auctions</Link>/ <span className="text-grey">Live bid</span> </p>
                <main className='h-screen w-full border border-black flex'>
                    <div className='w-full md:w-1/2 overflow-hidden h-full flex flex-col justify-between relative text-white p-4 md:p-8'>
                        <img src={currentBid && currentBid.url} alt="" className='w-full min-h-full absolute -z-10 top-0 left-0'/>

                        <div className='hidden md:flex justify-between items-center w-full '>
                            <div className='w-[49px] h-[49px] bg-slate-400 rounded-full'>
                            <RxCross1 onClick={handleClick} className='w-[45px] h-[45px] bg-slate-400 rounded-full text-white' />
                            </div>
                            <span className='bg-[#4693ED] text-xl rounded-[1.25rem] py-1 px-8 font-inter font-medium '>LIVE</span>
                        </div>

                        <div className="flex items-center gap-2 md:hidden text-medium text-white leading-[157%]">
                            <p className='mr-auto'>Tag: Lost or Wither</p>
                            <span className='bg-[#006CA2] rounded-[5px] text-[13px] py-1 px-3'>LIVE</span>
                            <span className='bg-white/[0.4] text-[13px] rounded-[5px] py-1 px-2 flex items-center'>
                                <AiFillEye className='mr-1 w-[15px] h-[15px]' />
                                295
                            </span>
                                <svg onClick={handleClick} className='ml-3' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.18327 1.06818C0.125166 1.01007 0.079076 0.941094 0.0476304 0.865178C0.0161849 0.789261 6.12223e-10 0.707895 0 0.625724C-6.12223e-10 0.543552 0.0161849 0.462186 0.0476304 0.38627C0.079076 0.310353 0.125166 0.241374 0.18327 0.18327C0.241374 0.125166 0.310353 0.079076 0.38627 0.0476304C0.462186 0.0161849 0.543552 -6.12223e-10 0.625724 0C0.707895 6.12223e-10 0.789261 0.0161849 0.865178 0.0476304C0.941094 0.079076 1.01007 0.125166 1.06818 0.18327L7.5 6.61634L13.9318 0.18327C13.9899 0.125166 14.0589 0.079076 14.1348 0.0476304C14.2107 0.0161849 14.2921 0 14.3743 0C14.4564 0 14.5378 0.0161849 14.6137 0.0476304C14.6896 0.079076 14.7586 0.125166 14.8167 0.18327C14.8748 0.241374 14.9209 0.310353 14.9524 0.38627C14.9838 0.462186 15 0.543552 15 0.625724C15 0.707895 14.9838 0.789261 14.9524 0.865178C14.9209 0.941094 14.8748 1.01007 14.8167 1.06818L8.38366 7.5L14.8167 13.9318C14.8748 13.9899 14.9209 14.0589 14.9524 14.1348C14.9838 14.2107 15 14.2921 15 14.3743C15 14.4564 14.9838 14.5378 14.9524 14.6137C14.9209 14.6896 14.8748 14.7586 14.8167 14.8167C14.7586 14.8748 14.6896 14.9209 14.6137 14.9524C14.5378 14.9838 14.4564 15 14.3743 15C14.2921 15 14.2107 14.9838 14.1348 14.9524C14.0589 14.9209 13.9899 14.8748 13.9318 14.8167L7.5 8.38366L1.06818 14.8167C1.01007 14.8748 0.941094 14.9209 0.865178 14.9524C0.789261 14.9838 0.707895 15 0.625724 15C0.543552 15 0.462186 14.9838 0.38627 14.9524C0.310353 14.9209 0.241374 14.8748 0.18327 14.8167C0.125166 14.7586 0.079076 14.6896 0.0476304 14.6137C0.0161849 14.5378 0 14.4564 0 14.3743C0 14.2921 0.0161849 14.2107 0.0476304 14.1348C0.079076 14.0589 0.125166 13.9899 0.18327 13.9318L6.61634 7.5L0.18327 1.06818Z" fill="white"/>
                                </svg>
                        </div>

                        <p className='font-inter font-semibold text-3xl -mt-20 md:mt-0 leading-[157%] w-full text-center'>Current bid $4500</p>

                        <p className='text-xl leading-[157%] hidden md:block'>Tag: Lost or Wither</p>
                        <p className='md:hidden'></p>
                        <div className='absolute h-1/2 px-4 bottom-3 w-full left-0 md:hidden flex flex-col justify-end'>
                            <Bidders classes='bottom-8 right-4'/>
                        </div>
                    </div>
                    <div className='hidden w-1/2 shrink-0 grow-0 px-8 pb-4 md:flex flex-col justify-between relative'>
                        <Bidders classes="right-10 bottom-[90px]"/>
                    </div>                    
                </main>
                <section className='mt-8 hidden md:block'>
                    <Link to="/drop">
                        <button className='flex  items-center gap-4 text-2xl text-black leading-[178%] font-medium'>See upcoming drops 
                                <VscArrowRight className='w-[60px] h-[60px]' />
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Livebid
