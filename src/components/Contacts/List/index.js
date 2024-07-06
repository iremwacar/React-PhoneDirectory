import React, { useState } from 'react';

function List({ contacts,deleteNumber }) {
  const [filterText,setFilterText]=useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    )
  })

  console.log("filtered",filtered);
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
            <button className='delete-btn'
            onClick={()=> deleteNumber(i)}>X</button>
          </li>
        ))}
      </ul>
      <p>Total contacts:{filtered.length}</p>
    </div>
  );
}

export default List;
