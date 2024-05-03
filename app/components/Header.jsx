import React from 'react'

const Header = () => {
   return (
      <header className="bg-white  border-b">
         <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
               <div className="md:flex md:items-center md:gap-12">
                  <a className="block " href="#">
                     <span className="sr-only">Home</span>
                     <h1 className='text-2xl font-semibold '> Conti<span className='text-[#F97300]'>new ...</span></h1>
                  </a>
               </div>

               <div className="hidden md:block">
                  <nav aria-label="Global">
                     <ul className="flex items-center gap-6 text-sm">
                        <li>
                           <a className="text-slate-900 font-semibold text-lg transition hover:text-slate-900/75" href="#"> Home </a>
                        </li>

                        <li>
                           <a className="text-slate-900 text-lg transition hover:text-slate-900/75" href="#"> Mates </a>
                        </li>

                        <li>
                           <a className="text-slate-900 text-lg transition hover:text-slate-900/75" href="#"> Rent More </a>
                        </li>

                        <li>
                           <a className="text-slate-900 text-lg transition hover:text-slate-900/75" href="#"> Services </a>
                        </li>
                     </ul>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">


                     <div className="hidden sm:flex">
                        <a
                           className="inline-flex gap-2 items-center justify-center space-x-4 border rounded-full  px-5 py-2.5 text-sm font-medium text-black"
                           href="#"
                        >
                           <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.7008 8.40003C14.7008 9.51394 14.2583 10.5822 13.4707 11.3699C12.683 12.1575 11.6147 12.6 10.5008 12.6C9.38688 12.6 8.31859 12.1575 7.53094 11.3699C6.74328 10.5822 6.30078 9.51394 6.30078 8.40003C6.30078 7.28611 6.74328 6.21782 7.53094 5.43017C8.31859 4.64251 9.38688 4.20001 10.5008 4.20001C11.6147 4.20001 12.683 4.64251 13.4707 5.43017C14.2583 6.21782 14.7008 7.28611 14.7008 8.40003Z" fill="#343434" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0716 20.9917C4.47144 20.767 0 16.1554 0 10.5C0 4.70087 4.70087 0 10.5 0C16.2992 0 21.0001 4.70087 21.0001 10.5C21.0001 16.2992 16.2992 21.0001 10.5 21.0001C10.4521 21.0004 10.4041 21.0004 10.3562 21.0001C10.2612 21.0001 10.1661 20.9969 10.0716 20.9917ZM3.76216 17.1256C3.68366 16.9001 3.65693 16.6599 3.68398 16.4227C3.71103 16.1855 3.79115 15.9574 3.91839 15.7554C4.04564 15.5535 4.21674 15.3827 4.41901 15.2559C4.62127 15.1291 4.84949 15.0495 5.08674 15.0229C9.17966 14.5699 11.8456 14.6108 15.9186 15.0324C16.1561 15.0571 16.3849 15.1357 16.5875 15.2623C16.7901 15.3888 16.9612 15.5599 17.0876 15.7625C17.2141 15.9651 17.2927 16.1939 17.3173 16.4315C17.342 16.6691 17.3122 16.9091 17.23 17.1334C18.9756 15.3673 19.9532 12.9833 19.9501 10.5C19.9501 5.28099 15.7191 1.05 10.5 1.05C5.28099 1.05 1.05 5.28099 1.05 10.5C1.05 13.0809 2.08478 15.4204 3.76216 17.1256Z" fill="black" />
                           </svg>

                           Profile
                        </a>
                     </div>
                  </div>

                  <div className="block md:hidden">
                     <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
