import ContactList from "../ContactList/ContactList";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilters } from "../../redux/selectors";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleAdd = (newContact) => {
    dispatch(addContact(newContact));
  };
  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const setFilter = (name) => {
    dispatch(changeFilter(name));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd}></ContactForm>
      <SearchBox value={filter} onSearch={setFilter}></SearchBox>
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
