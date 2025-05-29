import ContactList from "../ContactList/ContactList";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList />
    </div>
  );
}

export default App;
