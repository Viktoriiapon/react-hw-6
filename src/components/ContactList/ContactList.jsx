import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

import css from "./ContactList.module.css";

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.selectContacts.contacts.items);
  const filter = useSelector((state) => state.selectNameFilter.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
