import React from 'react'
import Transitions from '../../components/transition/Transition'
import { useGlobalContext } from '../../Context'
import {CartCheckout} from './CartCheckout'
import { EmptyCart } from './EmptyCart'


export const Cart = () => {
  const {cart} = useGlobalContext()
  return (
    <Transitions>
                  <main className='pb-8'>
                <div className="container mx-auto px-4 md:px-0">
                    <div className="max-w-[1064px] mx-auto">

                        {/* Check if cart is not empty and show cart item(s), otherwise show emptycart  */}
                        {cart.length ? <CartCheckout width='md:w-2/5' hidden="md:block"/> : <EmptyCart />}
                    </div>
                </div>
            </main>
    </Transitions>
  )
}
