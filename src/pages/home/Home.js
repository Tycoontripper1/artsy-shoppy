import React from 'react'
import Hero from './Hero'
import { Featured } from './Featured'
import { AuctionHome } from './AuctionHome'
import { Explore } from './Explore'
import { FadeIn } from './FadeIn'
import { Newsletter } from '../../components/Newsletter/Newsletter'
import { Footer } from '../../components/Footer/Footer'
import Transitions from '../../components/transition/Transition'
import { MobileHero } from './MobileHero'



export const Home = () => {

  return (
    <Transitions>
      <div>
      {/* Hero section */}
        <section>
        <h1
        className="clash-d2 mb-[30px] px-4 font-medium md:font-semibold text-center md:text-[80px] text-[2rem] leading-[150%] md:leading-[120%] mt-10 mx-auto 
        tracking-wide"
      >
        Photography is poetry <span className='md:inline hidden'>& <br /></span> <span className='md:hidden'>and</span> beautiful untold stories
      </h1>

      <p className="text-center md:text-[1.25rem] px-4 font-medium leading-[156%] md:leading-[120%] mx-auto  ">
        Flip through more than 10,000 vintage shots, old photograghs, historic
        <br className='hidden md:inline' /> images and captures seamlessly in one place. Register to get top
        access.
      </p>
      <div className='md:overflow-x-scroll'>
                    <Hero />
                    <MobileHero />
                </div>
        </section>

        <main>
          {/* Featured section */}
        <section className='mb-[100px] md:mb-[186px]'>
                    <div className='container mx-auto px-4 md:px-0'>
                        <h2 className='font-bold md:font-medium text-[1.75rem] md:text-[3rem] leading-[4rem] md:mb-9'>Featured products</h2>
                        <div className=''>
                            <Featured 
                            />
                        </div>
                    </div>
                </section>
              {/* home auction section */}
                <section className='gradient mb-[100px] md:mb-[190px]'>
                    <AuctionHome />
                </section>
              {/* explore section */}
                <section className='mb-[100px] md:mb-[180px]'>
                    <Explore content="Explore marketplace" link="/marketplace"/>
                    <Explore content="See auctions" link='/auctions'/>
                </section>

                <section className='bg-[#e2e2e2] mb-[66px] md:mb-[147px]'>
                    <div className="container font-clash mx-auto md:py-[75px] relative">
                        <div className='overflow-hidden relative'>
                            <article className='flex justify-between'>
                                <h2 className='font-semibold mt-[7px] md:mt-0 text-[1.5rem] md:text-[55px] leading-[155%] text-[#161616] max-w-[256px] md:max-w-[535px]'>TOP CREATORS OF THE WEEK</h2>
                                <div className='flex'>
                                    <div className='hidden md:block rounded-full w-2.5 bg-[#AEAEAE] border mr-[34px] overflow-hidden flex items-end'>
                                        <div className="w-full h-1/5 bg-grey-dark rounded-full"></div>
                                    </div>
                                    <ul className='absolute -right-24 md:relative md:right-0  text-grey text-[10px] md:text-[2.5rem] leading-[155%] mr-8 flex md:block gap-4'>
                                        <li className='mb-5'>Editorial</li>
                                        <li className='mb-5'>Fashion</li>
                                        <li className='mb-5'>Lifestyle</li>
                                        <li className=''>Blueprint</li>
                                    </ul>
                                </div>
                            </article>
                            <p className='text-[13px] md:text-3xl relative leading-[130%] text-black/[0.57] font-[200] md:mr-[12rem] mt-9'>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
                                <span className="text-grey text-[2rem] md:text-[3rem] leading-[155%] font-bold absolute bottom-8 right-0 md:right-8">CIRCA</span>
                            </p>
                            <div className='flex md:my-[75px]'><p className='my-4 ml-auto md:mr-8 font-bold text-[4rem] md:text-[170px] text-[#161616] md:leading-[150px] line-through decoration-8'>1985</p></div>
                        </div>
                        <FadeIn />
                    </div>
                </section>
                <section className='mb-[30px] md:mb-[3.75rem] px-4 md:px-0'  >
                    <Newsletter />
                </section>
                <div  className='px-4 md:px-0'>
                      <Footer />
                </div>

               
        </main>
    </div>
    </Transitions>
    
  )
}
