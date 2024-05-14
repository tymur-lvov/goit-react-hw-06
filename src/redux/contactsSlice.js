import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  //   filters: {
  //     name: "",
  //   },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  reducers: {
    addContact: (state, { payload }) => {
      console.log("addContact");
    },
    deleteContact: (state, { payload }) => {
      console.log("deleteContact");
    },
  },
});

export const { selectContacts } = contactsSlice.selectors;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
