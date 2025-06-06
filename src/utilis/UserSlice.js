import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
});

// Exporting actions
export const { addUser, removeUser } = UserSlice.actions;

// Exporting reducer
export default UserSlice.reducer;
