import { Action, createReducer, on } from "@ngrx/store"
import { Address, Data, LocationElement } from "../interface";
import { initialState } from "./task.state"
import * as TaskActions from './task.actions';

export interface ITaskDataState {
    data: Data
}


const _taskReducer = createReducer<ITaskDataState>(
    initialState,
    on(TaskActions.loadDataSuccess, (state, { data }) => ({...state, data })),
    on(TaskActions.isOnboarded, (state, { onboarded}) => {
        const data = state.data;
        const newData = Object.assign({}, data)
        newData.onboarded = onboarded
        return ({ ...state, data: newData })
    }),
    on(TaskActions.changeProfile, (state, { user }) => {
        return ({
            ...state, 
                data: {
                    ...state.data,
                    user
                },
            })
    }),
    on(TaskActions.changeLocation, (state, {address}) => {
        return ({
            ...state, 
                data: {
                    ...state.data,
                    user: {
                        ...state.data.user,
                        contact: {
                            ...state.data.user.contact,
                            locations: address
                        }
                    }
                },
                
            })
    })
);

export function taskReducer(state: ITaskDataState | undefined, action: Action) {
    return _taskReducer(state, action)
}