import React, { useState, useEffect } from 'react';
import Form from './Form'; 
import List from './List'; 

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={addContact} contacts={contacts} />
    </div>
  );
}

export default Contacts;
