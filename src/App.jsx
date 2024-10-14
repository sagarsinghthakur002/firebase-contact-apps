import React from 'react'
import Navbar from './components/Navbar'
import { IoIosSearch } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
const App = () => {
  return (
    <div className='text-red-700 mx-auto max-w-[370px] px-4 '>

      <Navbar />
    <div className='flex gap-2'>
      <div className='flex relative items-center flex-grow'>
      <IoIosSearch className=' absolute text-white  text-3xl' />

        <input className='bg-transparent border-white border focus: h-10 rounded-md flex-grow text-white px-8'
         type='text'  />
      </div>
      <MdAddToPhotos  className='text-4xl text-slate-800 '/>
    </div> 
    </div>
  )
}

export default App