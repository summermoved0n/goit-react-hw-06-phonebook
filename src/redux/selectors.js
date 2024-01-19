export const getContacts = state => {
  const { contacts } = state.phonebook;
  return contacts;
};

export const getFilter = state => {
  const { filter } = state.phonebook;
  return filter;
};
