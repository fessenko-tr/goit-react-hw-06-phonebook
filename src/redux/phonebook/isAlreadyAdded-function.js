const isAlreadyAdded = (array, newValue) =>
  array.some((el) => el.name.toLowerCase() === newValue.toLowerCase());

export default isAlreadyAdded;
