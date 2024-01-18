import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contactsReducer';

const rootReducer = combineReducers({
  phonebook: contactsReducer,
});

export const store = createStore(rootReducer);
