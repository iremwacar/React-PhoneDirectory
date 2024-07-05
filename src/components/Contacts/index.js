import React, { useState } from 'react';
import From from './Form/index';
import List from './List/index';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    const addContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    return (
        <div>
            <List contacts={contacts} />
            <From addContact={addContact} contacts={contacts}  />
        </div>
    );
}

export default Contacts;
