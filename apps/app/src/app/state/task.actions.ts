import { createAction, props } from "@ngrx/store";
import {Data} from '@task-app/core-lib'

export const sendingApiData = createAction(
    '[Profile Component] sending data...',
    props<{data: Data}>()
)