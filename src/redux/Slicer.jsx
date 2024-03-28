import { CreateSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return data.json()
})
const todoSlice = createSlice({
    name: 'Bob',
    initialState: {
        isloading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {

    }
})
export default todoSlice.reducer