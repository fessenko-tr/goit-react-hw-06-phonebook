import Contact from "../Contact";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

function ContactList() {
  const contactsArray = useSelector((state) => state.phonebook.contacts);
  const filterValue = useSelector((state) => state.phonebook.filter);
  const dispatch = useDispatch();

  const deleteContactBtn = (id) => dispatch(deleteContact(id));

  const getFilteredContacts = contactsArray.filter((el) =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const contactsList = getFilteredContacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      deleteFunction={deleteContactBtn}
    />
  ));

  return <ul>{contactsList}</ul>;
}

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContactBtn: PropTypes.func.isRequired,
};

export default ContactList;
