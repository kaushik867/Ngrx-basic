
import { Action } from ".";
import { Iuser } from "../users.service";

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_FAILED = 'user list failed';
export const USER_LIST_DELETE = 'user list delete';

export class userListRequest implements Action{
    type: string = USER_LIST_REQUEST;
}

export class userListSuccess implements Action{
    type: string = USER_LIST_SUCCESS;
    constructor(public payload?: {data: Iuser[]}){}
}

export class userLoadFailed implements Action{
    type: string = USER_LIST_FAILED;
    constructor(public payload?: {data: string}){}
}

export class userDelete implements Action{
    type: string = USER_LIST_DELETE;
    constructor(public payload?: {id: number}){}
}
