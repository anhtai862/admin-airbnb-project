import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_KEY, ACTION_NAME } from "enum/admin.enum";
import { IDELETE } from "interfaces/Delete-User";
import { IListUser } from "interfaces/List-User";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userAPI from "services/user";
import { AppDispatch } from "store";
import { getListUser } from "./list-user";

interface DeleteState {
  data: any;
  isLoading: boolean;
  error: string;
}
const initialState: DeleteState = {
  data: {},
  isLoading: false,
  error: "",
};

export const deleteUser = createAsyncThunk(
  ACTION_KEY.DELETEUSER,
  async (userId: string) => {
    try {
      const data = await userAPI.deleteUser(userId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const deleteSlice = createSlice({
  name: ACTION_NAME.DELETEUSER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(deleteUser.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default deleteSlice.reducer;
