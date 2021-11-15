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
        let newState: ITaskDataState;
        switch(profileType) {
            case 'displayName': 

                newState = ({
                    ...state,
                    data: {
                        ...state.data,
                        user: {
                            ...state.data.user,
                            displayName: value
                        }
                    }
                })
                
                break;
            case 'phone': 
                newState = ({
                    ...state,
                    data: {
                        ...state.data,
                        user: {
                            ...state.data.user,
                            contact: {
                                ...state.data.user.contact,
                                phoneNumber: value
                            }
                        }
                    }
                })
                break;
            default: 
                newState = state;
        }
        return ({...state, data: newState.data})
    })
);

export function taskReducer(state: ITaskDataState | undefined, action: Action) {
    return _taskReducer(state, action)
}