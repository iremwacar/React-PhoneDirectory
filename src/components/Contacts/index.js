import React, { useEffect, useState } from 'react';
import From from './Form/index';
import List from './List/index';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    useEffect(()=>{
        console.log(contacts);
    },[contacts])

    return (
        <div>
            <List contacts={contacts} />
            <From addContact={addContact} contacts={contacts}  />
        </div>
    );
}

export default Contacts;
