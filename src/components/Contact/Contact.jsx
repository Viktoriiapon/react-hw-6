import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

import css from "./Contact.module.css";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={css.delButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
