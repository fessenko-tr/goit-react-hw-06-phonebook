import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.phonebook.contacts);
  const noContactsAdded = "You seem not to have any contacts yet";

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification msg={noContactsAdded} />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
