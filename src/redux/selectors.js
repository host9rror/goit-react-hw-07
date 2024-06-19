import { createSelector } from '/node_modules/.vite/deps/@reduxjs_toolkit.js?v=33bf2f70';

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items || [];  
export const selectFilter = state => state.filters.value || '';  

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);