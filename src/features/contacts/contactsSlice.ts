import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: 'active' | 'inactive';
}

export interface ContactsState {
    contacts: Contact[];
    loading: boolean;
    error: string | null;
}

const initialState: ContactsState = {
    contacts: [],
    loading: false,
    error: null
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
            const newContact = {
                ...action.payload,
                id: Date.now().toString() // Generate a unique ID using timestamp
            };
            state.contacts.push(newContact);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
            }
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;