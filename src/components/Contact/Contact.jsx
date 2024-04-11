import React from 'react';
import './Contact.css';

const Contact = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;
  return (
    <div className='card'>
      <div className='info'>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className='delButton' type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;
