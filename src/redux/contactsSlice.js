import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { nanoid } from "nanoid";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload); 
      },
      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items; 

export default contactsSlice.reducer;
