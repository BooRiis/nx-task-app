import { Action, createReducer } from "@ngrx/store"
import { Data } from "@task-app/core-lib";
import { initialState } from "./task.state"

const _taskReducer = createReducer(initialState);

export function taskReducer(state: Data | undefined, action: Action) {
    return _taskReducer(state, action)
}