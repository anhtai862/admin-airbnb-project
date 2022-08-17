import { configureStore } from "@reduxjs/toolkit";

import user from "slices/user";
import list_user from "slices/list-user";
import delete_user from "slices/delete-user";

// configureStore: mặc định đã được setup redux devtool và redux thunk
const store = configureStore({
  reducer: {
    user,
    list_user,
    delete_user,
  },
  // devTools: false // có enable devtool hay không, mặc định là true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
