import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
   
    useEffect(() => {
      
    }, [contacts]);
  
    return (
        <ul>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    );
};

export default ContactList;
