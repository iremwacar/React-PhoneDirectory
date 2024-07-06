import React, { useState, useEffect } from 'react';
import Form from './Form'; 
import List from './List'; 
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
        fullname:'Irem',
        phoneNumber:'2006'
    },
    {
        fullname:'Ibrahim',
        phoneNumber:'2022'
    },
    {
        fullname:'Hilal',
        phoneNumber:'2018'
    }
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteNumber = (index) => {
    const number = contacts.filter((_,i)=> i !== index);
    setContacts(number);
  }

  const updateNumber = (index, updatedNumber) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].phoneNumber = updatedNumber;
    setContacts(updatedContacts);
  };



  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className='container'>
        <h1>Phone Directory</h1>
      <List contacts={contacts} deleteNumber={deleteNumber} updateNumber={updateNumber} />
      <Form addContact={addContact} contacts={contacts} />
    </div>
  );
}

export default Contacts;
