import {VscArrowRight} from 'react-icons/vsc'
function AuctionProduct({img, id, handleClick}) {
    return (
            <div onClick={()=>handleClick(id)} className="auction-card-wrapper shrink-0 w-[228px] h-[186px] md:h-[316px] md:w-[388px] ">   
                <div className='auction-card flex items-end relative overflow-hidden rounded-[15px] transition-all duration-300	ease-in-out shadow-[0_0_9px_-1px_rgba(0,0,0,0.25)] h-full w-full '>
                    <img src={img} alt="" className='w-full h-auto'/>
                    <div className="auction-join w-full h-full absolute top-0 bg-black/[0.6] left-0 text-white text-[1.5rem] hidden md:flex opacity-0 transition-all duration-300	ease-in-out  items-center justify-center gap-4 font-medium ">
                        Join livestream
                        <VscArrowRight className='w-[48px] h-[48px]' />
                    </div>
                    <div className='absolute bottom-4 md:bottom-7 flex items-center justify-center left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] mx-auto h-10 md:h-[3.5rem] font-stix text-xl md:text-[1.5rem] text-white text-center rounded-[0.5rem] backdrop-blur-[1.5px] border-[0.5] border-white bg-white/[0.24]' >6hr : 40mins: 15s</div>
                </div>
            </div>
    )
}

export default AuctionProduct
