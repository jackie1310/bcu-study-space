import { configureStore } from "@reduxjs/toolkit";
import authAdmin from "./Loading/authAdmin";

export const store = configureStore({
    reducer: {
        authAdmin: authAdmin
    },
});