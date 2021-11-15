import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../services";
import { loadDataFailure, loadDataSuccess, sendingApiData } from "./task.actions";
import {catchError, map, mergeMap} from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class TaskEffects {

    loadJson$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(sendingApiData),
            mergeMap( (action) =>
                this.api.getConfig(action.url).pipe(
                map(data => loadDataSuccess({data: data })),
                catchError(error => of(loadDataFailure({ error }))))
            ),
        );
    });

    constructor(
        private actions$: Actions,
        private api: ApiService
    ) {}
}