import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../slices/ContactSlice";
import { filterReducer } from "../slices/FilterSlice";

export const store = configureStore({
  reducer: {contactStore: contactReducer, filterStore:filterReducer}
});
