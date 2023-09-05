import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from "./projectsSlice";

const store = configureStore({
    reducer: {
        projects: projectsSlice
    },
})

export default store;


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;