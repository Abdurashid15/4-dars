import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slicer'

export const store = configureStore({
    todo: todoReducer
})