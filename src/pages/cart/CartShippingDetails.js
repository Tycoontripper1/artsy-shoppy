import React , {  useEffect, useRef, useState }from 'react'
import { useGlobalContext } from '../../Context'
import { Link, useNavigate } from 'react-router-dom'
import { CartCheckout } from './CartCheckout'
import InputWrapper from './InputWrapper'

export const CartShippingDetails = () => {
  const cartItems = useRef()
  const checkoutForm = useRef()
  const {setName} = useGlobalContext
  const navigate = useNavigate()


  const [countries, setCountries]= useState([])

  const url ='https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json'

useEffect(()=>{      
//Fetch products      
fetch(url)
.then(response => response.json())
.then(data =>setCountries(data))

},[])

const options = countries.map((country)=>{
  const {name,id}= country
  return(
    <option value={name} key={id}>{name}</option>
  )
})


  const [formData, setFormData] = useState({
      email: '',
      checkbox: false,
      name: '',
      wallet: '',
      city: '',
      country: '',
      postcode: '',
      number: ''
  })
  function handleSubmit(e){
    e.preventDefault();
    setName(formData.name)
    navigate('/checkout')
}

  function handleChange(e){
    setFormData(prevItem => {
        return {...prevItem, [e.target.id]: e.target.value}
    })
}

function handleSwitch(e){
  setFormData(prevItem => {
      return {...prevItem, [e.target.id]: !formData.checkbox}
  })
}


  useEffect(()=>{
    // Page transition when component mount 
    let timeout = setTimeout(() => {
        cartItems.current.classList.replace('w-full', 'w-1/2')
        timeout = setTimeout(() => {
            checkoutForm.current.classList.replace('md:w-0', 'md:w-1/2')
        }, 500);
      }, 100);
      return () => clearTimeout(timeout);


},[])
  return (
    <div className={`max-w-[1064px] px-4 md:px-0 mx-auto pb-8`}>
    <p className='font-medium text-[#BCB7B7] md:hidden mb-8'>Home/ Marketplace/ Cart/ <span className='text-grey'>Shipping</span></p>
    <div className='w-3/5 mx-auto mb-8 hidden md:block'>
        <Link to="/carts"><button className='cart-btn'>Shopping cart</button></Link>
        <button className='cart-btn active-cart-btn'>Shipping details</button>
        <button className='cart-btn'>Payment details</button>
    </div>
    <main className='flex gap-16 justify-end'>
        <form ref={checkoutForm} onSubmit={handleSubmit} className="w-full md:w-0  grow-0 overflow-hidden">
            <InputWrapper>
                <label htmlFor="email">Your email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="inputStyle"
                    required
                />
                <input type="checkbox" name="checkbox" id="checkbox" className='bg-transparent' value={formData.checkbox} onChange={handleSwitch} />
                <label htmlFor="checkbox" className='text-sm ml-3 mt-3 inline-block'>Get updates about new drops & exclusive offers</label>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="name">Your full name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="inputStyle"
                    required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="wallet">Choose a wallet</label>
                <select name="wallet" id="wallet" required onChange={handleChange} value={formData.wallet} className='inputStyle'>
                    <option value=""></option>
                    <option value="metamask">Metamask</option>
                    <option value="coinbase">Coinbase</option>
                    <option value="trust">Trust Wallet</option>
                    <option value="phantom">Phantom Wallet</option>
                </select>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    name="city" 
                    id="city" 
                    value={formData.city}
                    onChange={handleChange}
                    className="inputStyle"
                    required
                />
            </InputWrapper>
            <div className='flex items-center mt-8 gap-4 md:gap-8'>
                <InputWrapper>
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country" required onChange={handleChange} value={formData.country} className='inputStyle'>
                        <option value=""></option>
                        {options}
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="postcode" className='block -mt-6'>Postal code</label>
                    <input 
                        type="number" 
                        name="postcode" 
                        id="postcode" 
                        value={formData.postcode}
                        onChange={handleChange}
                        className="inputStyle"
                        required
                        placeholder='001001'
                    />
                </InputWrapper>
            </div>
            <InputWrapper>
                <label htmlFor="number">Phone Number</label>
                <input 
                    type="number" 
                    name="number" 
                    id="number" 
                    value={formData.number}
                    onChange={handleChange}
                    className="inputStyle"
                    required
                    placeholder='08123456785'
                />
            </InputWrapper>
            <button className='block w-full bg-blue text-xl text-white mt-8 h-[3.5rem]'>Proceed to payment</button>
            <Link to="/cart" className='md:hidden'><span className='text-lg underline text-[#006CA2] block text-center my-7'>Go Back to cart</span></Link>
        </form>
        {/* cart checkout */}
        <div ref={cartItems} className='hidden md:block w-full transition-all duration-500'>
            <CartCheckout hidden='hidden' width="w-full"/>
        </div>
    </main>
 </div>
  )
}
