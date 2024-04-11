import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import './App.css'

function App() {
  // Отримання контактів з локального сховища або використання початкових контактів
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = searchName => {
    setFilter(searchName);
  };

  const filteredContacts = filter
  ? contacts.filter(contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  : contacts;


  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    
    setContacts(prevContacts => [...prevContacts, finalUser]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;






