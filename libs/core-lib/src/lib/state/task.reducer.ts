import { Action, createReducer, on } from "@ngrx/store"
import { Data } from "@task-app/core-lib";
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
                }})
    })
);

export function taskReducer(state: ITaskDataState | undefined, action: Action) {
    return _taskReducer(state, action)
}