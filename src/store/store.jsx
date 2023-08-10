import {configureStore} from "@reduxjs/toolkit"

import {CrewReducer} from "../reducer/CrewReducer"


export const store = configureStore({
    reducer:{
        crew:CrewReducer,
    }
});
