import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.name.toLowerCase());
  });

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
