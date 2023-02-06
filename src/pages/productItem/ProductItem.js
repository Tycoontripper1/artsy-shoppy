import React, { useState} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useGlobalContext } from "../../Context";
import { toTitleCase } from "../../utils";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ProductSubs from "./ProductSubs";
import SwiperItem from "../../components/swiper/Swiper";
import Recommended from "./Recommended";
import {VscArrowRight} from 'react-icons/vsc'
import {VscChevronRight} from 'react-icons/vsc'
import {VscChevronLeft} from 'react-icons/vsc'



export const ProductItem = () => {
    const {productId} = useParams()
    const {products, setCart, cart, toggleFavorite, favorite} = useGlobalContext()
    const [qty, setQty] = useState(1)
    const [disableButton, setDisableButton] = useState(false)
    const navigate = useNavigate()
    
    // find the product with the id from url parameter
    const openProduct = products.find(item => item.id == productId)

    useState(()=>{
        console.log('ran')
        // check whether the product is in cart already and disable the button 
        if(cart.some(item => item.id == productId)){
            setDisableButton(true)
        }
    },[])

    // Mapped some part of the product to serve as recommended product 
    const recommendedItems = products.map((item, index)=>{
        if(index >= 10 && index <= 13){
            return(
                <Recommended
                    id={item.id}
                    key={item.id}
                    img={item.url} 
                    title={item.name}
                    ethprice={item.price.eth}
                    setFavorite={toggleFavorite}
                />
            )
        }
    })
    

    const handleClick = (e) => {
        //Get the product
        const id = e.currentTarget.getAttribute('data-id')
        const product = products.find(item => item.id == id)
        //Add the product quantity selected
        product.qty = qty

        //Add product to cart
        setCart(prevCart => {
            return [...prevCart, product]
        })
        //Disable add button
        setDisableButton(true)
        //Show suckcessful toast
        toast("Product Added Successfuly!", {type: 'success'});
        //Navigate to the cart page
        navigate('/carts')
    }

    // reducing the quantity selected while it's greate than 1
    function decreaseQty(){
        if(qty > 1){
            setQty(prevValue => prevValue-1)
        } 
    }
    return (
        <div>
            <ToastContainer />
            <div className="container mx-auto px-4 md:px-0 pb-20 md:mb-0">
                <div className="max-w-[1064px] mx-auto">
                    <section className='font-medium md:leading-[200%] mb-8 md:mb-10 border-b-[0.5px] md:border-b-0 border-b-grey leading-[52px]'>
                        <span className='text-[#BCB7B7]'><Link to="/">Home/</Link> <Link to="marketplace">Marketplace/</Link> Editorial/</span>
                        <span className='text-black'>{openProduct && toTitleCase(openProduct.name)}</span>
                    </section>

                    <main className='md:border flex-col md:flex-row border-grey flex text-grey leading-[97%]'>
                        <div className='md:w-2/5 shrink-0 md:border-r border-r-grey md:py-5 md:px-3'>
                            <img src={openProduct && openProduct.url} alt="" className='w-full'/>
                        </div>
                        <div className='w-full flex flex-col'>
                            <div className='flex md:border-b border-b-grey md:px-5 pt-4 md:py-3 justify-between items-center'>
                                <h2 className='md:text-[2rem] font-medium md:font-bold '>{openProduct && toTitleCase(openProduct.name)}</h2>
                                <div className='hidden md:block text-xl font-medium flex items-center'>
                                    <svg width="53" height="62" viewBox="0 0 53 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.7025 29.9475L27.5825 10.8396C27.4539 10.6765 27.2896 10.5445 27.102 10.4538C26.9145 10.3631 26.7086 10.3159 26.5 10.3159C26.2914 10.3159 26.0855 10.3631 25.8979 10.4538C25.7104 10.5445 25.5461 10.6765 25.4175 10.8396L10.2975 29.9475C10.105 30.1842 10 30.4792 10 30.7835C10 31.0877 10.105 31.3827 10.2975 31.6194L25.4175 50.7273C25.5461 50.8904 25.7104 51.0224 25.8979 51.1131C26.0855 51.2038 26.2914 51.251 26.5 51.251C26.7086 51.251 26.9145 51.2038 27.102 51.1131C27.2896 51.0224 27.4539 50.8904 27.5825 50.7273L42.7025 31.6194C42.895 31.3827 43 31.0877 43 30.7835C43 30.4792 42.895 30.1842 42.7025 29.9475ZM27.8746 35.4922V15.6166L39.4552 30.2546L27.8746 35.4922ZM25.1254 35.4922L13.5448 30.2546L25.1254 15.6166V35.4922ZM25.1254 38.4949V45.9503L15.9503 34.3491L25.1254 38.4949Z" fill="#333333"/>
                                    </svg>
                                    {openProduct && openProduct.price.eth}
                                </div>
                                <span className="font-medium md:hidden">${openProduct && openProduct.price.usd}</span>
                            </div>
                            <div className='md:px-5 py-6 grow-1  '>
                                    <p className='mb-3 text-lg text-black md:text-[#616161]'>Creator : <span className='text-[#4693ED]'>{openProduct && toTitleCase(openProduct.creator)}</span></p>
                                    <p className='mb-3 md:text-black'>{openProduct && toTitleCase(openProduct.origin)}</p>
                                    <p className='mb-4 md:text-black text-lg font-medium'>Total views: <span>{openProduct && openProduct.views}</span></p>
                                    <div className='mb-6 text-2xl md:text-xl font-medium'>
                                        <button onClick={decreaseQty} className='mr-3'>-</button>
                                        <span className='w-4 inline-block text-center'>{qty}</span>
                                        <button onClick={()=> setQty(prevValue => prevValue+1)} className='ml-3'>+</button>
                                    </div>
                                    <div className='flex'>
                                        <button disabled={disableButton ? true : false} id='add-to-cart' onClick={handleClick} data-id={`${openProduct && openProduct.id}`} className='bg-blue disabled:bg-blue/[0.5] rounded-[3px] px-6 md:px-8 h-[3.5rem] flex items-center text-white font-medium'>
                                            <span>Add to Cart</span>
                                            <VscArrowRight className="h-[64px] w-[24px] ml-2" />
                                        </button>
                                        <button className='border h-[3.5rem] border-grey px-3 ml-4'>
                                            <svg onClick={()=>toggleFavorite(productId)} className="h-[25px] w-[27px] md:h-[42px] w-[34px]" width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={ favorite.some(item => item.id == productId) ? 'fill-red-500' : 'stroke-grey-dark'} d="M24.1161 5.95214L24.514 6.47514L24.9119 5.95214C27.0609 3.12763 30.8802 1.29517 35.2617 1.29517C42.1664 1.29517 47.6589 6.00547 47.6589 11.5823C47.6589 14.0997 46.2744 16.6813 44.0884 19.1745C41.9107 21.6583 38.993 23.9908 36.0541 26.002C33.1184 28.0109 30.1799 29.6869 27.9736 30.8612C26.871 31.4481 25.9525 31.909 25.3104 32.2228C24.9894 32.3797 24.7375 32.4999 24.5663 32.5806C24.5483 32.5891 24.5311 32.5972 24.5148 32.6048C24.4985 32.5971 24.4812 32.5889 24.463 32.5802C24.2918 32.4989 24.0399 32.3778 23.7189 32.2198C23.0767 31.9036 22.1582 31.4395 21.0555 30.8491C18.8491 29.6678 15.9103 27.9833 12.9745 25.9687C10.0353 23.9517 7.11733 21.6162 4.93933 19.1363C2.75267 16.6464 1.36914 14.0763 1.36914 11.5823C1.36914 6.00547 6.86164 1.29517 13.7663 1.29517C18.1478 1.29517 21.9671 3.12763 24.1161 5.95214Z" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            <div className="px-2 md:px-5 mt-auto py-5 md:py-6 border-y border-y-grey">
                                <ProductSubs title="Description" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, iste at dignissimos commodi deserunt accusamus similique accusantium voluptates pariatur? Dolorum odit suscipit cupiditate maxime quos odio ipsum dolores porro cumque?"/>
                            </div>
                            <div className="px-2 md:px-5 py-5 md:py-6 border-b border-b-grey">
                                <ProductSubs title="Listing" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
                            </div>
                            <div className="px-2 md:px-5 py-5 md:py-6 border-b border-b-grey md:border-b-0">
                            <ProductSubs title="Status" content="Lorem ipsum dolor sit, dolorum odit suscipit cupiditate maxime quos odio ipsum dolores porro cumque?"/>
                            </div>
                        </div>
                    </main>

                    <div className='hidden md:flex my-16 p-4 shadow-4xl'>
                        <span className='text-xl font-medium'>Explore more from this collection</span>
                        <button className='h-8 w-8 mr-4 rounded-full border border-grey ml-auto inline-flex items-center justify-center'>
                            <VscChevronLeft />
                        </button>
                        <button className='h-8 w-8 rounded-full border border-grey inline-flex items-center justify-center'>
                            <VscChevronRight />
                        </button>
                    </div>

                    
                    <h4 className='font-medium text-[1.5rem] text-grey-dark mt-[100px] mb-[30px] md:hidden'>More from this collection</h4>
                    <section className='overflow-x-scroll flex-nowrap gap-9 hidden md:flex'>
                        {recommendedItems}
                    </section>
                    {/* <section className=' md:hidden'>
                        <SwiperItem />
                    </section> */}
                    <Link to="/marketplace" className='hidden md:block'>
                        <div className='my-[100px] border-img w-fit p-[2px] rounded-[1rem] overflow-hidden mx-auto'>
                            <button className=' h-[3.5rem] px-8 text-[26px] rounded-[1rem] font-medium leading-[25px] bg-white'><span className='text-gradient'>Explore All</span></button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}




