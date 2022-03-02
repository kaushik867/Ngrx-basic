
import { Action } from "../Actions";
import { USER_LIST_DELETE, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../Actions/users.action";
import { Iuser } from "../users.service";


export interface userReducerState{
    loading: boolean;
    loaded: boolean;
    users: Iuser[];
    error: string;
}

const initialState: userReducerState = {
    loading: false,
    loaded: false,
    users: [],
    error: '',
}

export function userReducer(state = initialState, action: Action): userReducerState{
    switch(action.type){
        case USER_LIST_REQUEST: {
            return { ...state, loading: true }
        }
        case USER_LIST_SUCCESS: {
            const data = action.payload.data;
            return { ...state, loading: false, loaded: true, users: data};
        }
        case USER_LIST_FAILED: {
            const error = action.payload.data;
            return { ...state, loading: false, loaded: true, error};
        }
        case USER_LIST_DELETE: {
            const data = state.users.filter(user => user.id !== action.payload.id)
            return { ...state, loading: false, loaded: true, users: data};
        }
        default: {
            return {...state}
        }
    }
}

// Selectors

export const getLoading = (state: userReducerState) => state.loaded;
export const getLoaded = (state: userReducerState) => state.loading;
export const getUsers = (state: userReducerState) => state.users;
export const getUsersError = (state: userReducerState) => state.error;