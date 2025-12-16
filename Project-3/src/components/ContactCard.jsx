import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

function ContactCard({ contact }) {
  return (
    <div
      key={contact.id}
      className="bg-yellow-200 flex justify-between p-2 items-center rounded-lg "
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange-400 text-4xl" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-2xl gap-3 cursor-pointer">
        <RiEditCircleLine />
        <IoMdTrash className="text-red-500" />
      </div>
    </div>
  );
}

export default ContactCard;
