import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { IoIosSearch } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./config/Firebase";
import { HiOutlineUserCircle } from 'react-icons/hi';

const App = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const ContactRef = collection(db, "Contact"); 
        const contactSnapshot = await getDocs(ContactRef); 
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactLists); 
      } catch (error) {
        console.error(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className='text-red-700 mx-auto max-w-[370px] px-4'>
      <Navbar />
      <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <IoIosSearch className='absolute text-white text-3xl' />
          <input className='bg-transparent border-white border h-10  rounded-md flex-grow text-white px-8' placeholder='search' type='text' />
        </div>
        <MdAddToPhotos className='text-4xl text-slate-800' />
      </div>

      <div>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <HiOutlineUserCircle />
          </div>
          ))}
      </div>
    </div>
  );
};

export default App;
