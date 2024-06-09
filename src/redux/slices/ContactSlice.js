import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operators/ContactOperators";

const initialState = { contacts: { items:[], isLoading: false, error: null} };


const handlePending = (state) => { 
    return { ...state, contacts: {items:[...state.contacts.items], isLoading: true, error:null} }
}

const handleRejected = (state, action) => { 
    return { ...state, contacts: {items:[...state.contacts.items], isLoading: false, error: action.payload} }
}

const contactSlice = createSlice({
    initialState,
    name: "contactStore",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending);
        builder.addCase(fetchContacts.fulfilled,
            (state, action) => {
                return { ...state, contacts: {items:[...state.contacts.items, ...action.payload], isLoading: false, error:null} }
            });
        builder.addCase(fetchContacts.rejected, handleRejected);
        builder.addCase(addContact.pending, handlePending);
        builder.addCase(addContact.fulfilled,
            (state, action) => {
                return { ...state, contacts: {items:[...state.contacts.items, action.payload], isLoading:false, error: null} };
            });
        builder.addCase(addContact.rejected, handleRejected);
        builder.addCase(deleteContact.pending, handlePending);
        builder.addCase(deleteContact.fulfilled,
            (state, action) => {
                return { ...state, contacts: {items:[...state.contacts.items.filter(contacts => contacts.id !== action.payload.id)], isLoading:false, error:null } }
            });
        builder.addCase(deleteContact.rejected, handleRejected);
    }
});

export const contactReducer = contactSlice.reducer;
