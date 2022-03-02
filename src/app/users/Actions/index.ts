import { Action as ngAction } from '@ngrx/store'

export interface Action extends ngAction{
    payload?: any;
}