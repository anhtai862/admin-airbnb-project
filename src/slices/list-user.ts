import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_KEY, ACTION_NAME } from "enum/admin.enum";
import { IListUser } from "interfaces/List-User";
import userAPI from "services/user";

interface UserListState {
  data: IListUser[];
  isLoading: boolean;
  error: string;
}
const initialState: UserListState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getListUser = createAsyncThunk(ACTION_KEY.LISTUSER, async () => {
  try {
    const data = await userAPI.getListUser();
    return data;
  } catch (error) {
    throw error;
  }
});

const listUserSlice = createSlice({
  name: ACTION_NAME.LISTUSER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListUser.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getListUser.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getListUser.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});
export default listUserSlice.reducer;
