import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addNewContact = createAction("phonebook/Add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const deleteContact = createAction("phonebook/Delete");
export const updateFilter = createAction("phonebook/UpdateFilter");
