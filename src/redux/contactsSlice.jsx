import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    addContact: state => {
      state.value += 1;
    },
    removeContact: state => {
      state.value += 1;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
const contactsReduser = contactsSlice.reducer;

export default contactsReduser;
