import notesReducer from './slices/notesSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        notesReducer
    }
})