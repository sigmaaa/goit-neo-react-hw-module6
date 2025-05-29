import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilters } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const name = useSelector(getFilters);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(name.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
