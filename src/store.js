
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './clice/counterSlice'




export default configureStore({
reducer: {
    storeData : counterSlice ,
},
})