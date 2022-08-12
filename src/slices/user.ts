import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_KEY, ACTION_NAME } from "enum/admin.enum";
import { IUser } from "interfaces/User";
import userAPI from "services/user";

interface AddNewUserState {
  data: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: AddNewUserState = {
  data: {} as IUser,
  isLoading: false,
  error: "",
};

export const addNewUser = createAsyncThunk(
  ACTION_KEY.ADDUSER,
  async (user: IUser) => {
    try {
      const data = await userAPI.newUser(user);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const addUserSlice = createSlice({
  name: ACTION_NAME.ADDUSER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewUser.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(addNewUser.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(addNewUser.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default addUserSlice.reducer;
