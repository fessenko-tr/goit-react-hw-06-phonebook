import PropTypes from "prop-types";
import s from "./Contact.module.css";

function Contact({ id, name, number, deleteFunction }) {
  return (
    <li className={s.listItem}>
      <p>{`${name}: ${number}`}</p>
      <button
        className={s.listBtn}
        onClick={() => {
          deleteFunction(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default Contact;
