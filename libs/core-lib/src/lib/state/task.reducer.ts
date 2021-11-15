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
    on(TaskActions.changeProfile, (state, { profileType, value }) => {
        const data = state.data;
        const newData = Object.assign({}, data);
        const newUser = Object.assign({}, newData.user)
        const newContact = Object.assign({}, newUser.contact)

        switch(profileType) {
            case 'displayName': 
                newUser.displayName = value
                break;
            case 'phone': 
                newContact.phoneNumber = value
                newUser.contact = newContact
                break;
        }
        
        newData.user = newUser;
        return (({...state, data: newData }))
    })
);

export function taskReducer(state: ITaskDataState | undefined, action: Action) {
    return _taskReducer(state, action)
}