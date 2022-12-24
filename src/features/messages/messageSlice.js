import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "messages",
    initialState: {
        userMessages: [],
    },
    reducers: {
        loadMessages: (state, action) => {
            state.userMessages = action.payload
            const lastMessage = action.payload.length - 1
            state.latestMessages = [state.userMessages[lastMessage].text]
        },
        /* loadLatestMsgs: (state, action) => {
            state.latestMessages = action
        }, */
        sendNewMessage: (state, action) => {
            state.userMessages = [...state.userMessages, action.payload]
        }
    },
    extraReducers: {}
})

export const { loadMessages, sendNewMessage} = messageSlice.actions;
export default messageSlice.reducer;