import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../services";
import {  loadDataSuccess} from "./task.actions";
import {catchError, map, mergeMap} from 'rxjs/operators'
import { of } from "rxjs";
import { isOnboarded } from "@task-app/core-lib";

@Injectable()
export class IsOnboarded {

    loadJson$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(isOnboarded),
            mergeMap( (action) =>
                this.api.isOnboarded(action.onboarded).pipe(
                map(data => loadDataSuccess({ data: data }))
            ),
        ));
    });

    constructor(
        private actions$: Actions,
        private api: ApiService
    ) {}
}