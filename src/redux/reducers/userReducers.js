
import { ActionTypes } from "../contants/action_types";

const initialState = {
    user: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER :
            return state.user = payload;
        default:
            return state;
    };
};