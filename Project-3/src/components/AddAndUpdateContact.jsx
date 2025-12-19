import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addConatct = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            addConatct(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10 " />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email</label>
              <Field type="email" name="email" className="border h-10 " />
            </div>
            <button className="bg-orange-300 px-3 py-1 border cursor-pointer self-end">
              {isUpdate ? "Update " : "Add "}
              Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
