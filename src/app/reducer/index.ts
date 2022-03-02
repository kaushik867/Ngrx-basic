import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as FromUser from "../users/Reducer/user.reducer";

export interface RootReducerState{
    users: FromUser.userReducerState
}

export const RootReducer: ActionReducerMap<RootReducerState> = {
    users: FromUser.userReducer
}

export const getUsersState = (state: RootReducerState) => state.users;

export const getUsersLoaded = createSelector(getUsersState, FromUser.getLoaded);
export const getUsersLoading = createSelector(getUsersState, FromUser.getLoading);
export const getUsers = createSelector(getUsersState, FromUser.getUsers);
export const getUsersError = createSelector(getUsersState, FromUser.getUsersError);
