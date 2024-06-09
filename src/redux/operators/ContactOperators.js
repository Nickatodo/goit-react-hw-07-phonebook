import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://666507bfd122c2868e3fa3b1.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkApi) => { 
        try {
            const response = await axios.post("", {...newContact});
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkApi) => { 
        try {
            const response = await axios.delete(id)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);