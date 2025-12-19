import { use, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { db } from "./config/firebase";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  });

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex gap-3">
          <div className="flex relative items-center grow">
            <CiSearch className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              className=" border bg-transparent border-white rounded-md h-10 grow text-white pl-9"
            />
          </div>

          <CiCirclePlus
            onClick={onOpen}
            className="text-5xl text-black bg-white rounded-3xl cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default App;

// 1:15:20 ma aaxu ma
