import React, { useState } from 'react';

function List({ contacts,deleteNumber,updateNumber }) {
  const [filterText,setFilterText]=useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  })

  console.log("filtered",filtered);

  const handleUpdate = (index) => {
    const newPhoneNumber = prompt("Enter new phone number:");
    if (newPhoneNumber) {
      updateNumber(index, newPhoneNumber);
    }
  };

  return (
    <div>

      <input placeholder='Filter'
      value={filterText}
      onChange={(e)=>setFilterText(e.target.value)}/>

      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phoneNumber}</span>
            <div>
              <button className='edit-btn' onClick={() => handleUpdate(i)}>Edit</button>
            <button className='delete-btn'
            onClick={()=> deleteNumber(i)}>X</button>
            </div>
            
          </li>
        ))}
      </ul>
      <p>Total contacts:{filtered.length}</p>
    </div>
  );
}

export default List;
