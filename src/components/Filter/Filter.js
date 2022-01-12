import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/phonebook/phonebook-actions";

function Filter() {
  const filterValue = useSelector((state) => state.phonebook.filter);
  const dispatch = useDispatch();

  const updateFilterFunc = ({ currentTarget }) =>
    dispatch(updateFilter(currentTarget.value));

  return (
    <>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        value={filterValue}
        onChange={updateFilterFunc}
      />
    </>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  updateFilterFunc: PropTypes.func.isRequired,
};

export default Filter;
