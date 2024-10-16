import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { IoIosSearch } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import './App.css'                           



const App = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const ContactRef = collection(db, "Contact");
        const contactSnapshot = await getDocs(ContactRef);
        const contactLists = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(contactLists);  // Check if data is coming through
        setContact(contactLists);
      } catch (error) {
        console.error(error);
      }
    };
  
    getContacts();
  }, []);
  

  return (
    <div className="text-red-700 mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <IoIosSearch className="absolute text-white text-3xl" />
          <input
            className="bg-transparent border-white border h-10  rounded-md flex-grow text-white px-8"
            placeholder="search"
            type="text"
          />
        </div>
        <MdAddToPhotos className="text-4xl text-slate-800" />
      </div>

      <div>
  {contacts.map((contact) => (
    <div key={contact.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-2">
      <div className="flex items-center gap-3">
        <HiOutlineUserCircle className="text-4xl text-white" />
        {/* <div className="text-white">
          <h2 className="text-lg font-semibold">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div> */}
      </div>
      {/* <div className="flex gap-2">
      <MdEditNote style={{ color: 'white', fontSize: '24px' }} />
      <RiDeleteBin6Fill style={{ color: 'white', fontSize: '24px' }} />
      </div> */}
    </div>
  ))}
      </div>
    </div>
  );
};

export default App;

