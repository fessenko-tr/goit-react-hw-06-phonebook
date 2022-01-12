import {
  addNewContact,
  deleteContact,
  updateFilter,
} from "./phonebook-actions";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { toast } from "react-toastify";
import isAlreadyAdded from "./isAlreadyAdded-function";

const contacts = createReducer([], {
  [addNewContact]: (state, { payload: { id, name, number } }) => {
    if (isAlreadyAdded(state, name)) {
      toast.info(`${name} has already been added`);
      return;
    }
    return [...state, { id, name, number }];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filter = createReducer("", {
  [updateFilter]: (_, { payload }) => payload,
});

export const phonebookReducer = combineReducers({
  contacts,
  filter,
});
