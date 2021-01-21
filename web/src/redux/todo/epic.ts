import { combineEpics, ofType } from 'redux-observable';
import { of, from, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FETCH_TODOS } from './actionType';
import { fetchTodosResponse, fetchTodosFailed } from './action';
import { AnyAction } from 'redux';
import { RootStateOrAny } from 'react-redux';
import { fetchTodosUseCase } from '../../../../shared/usecases/modules/todo/fetch-todos';

export const fetchTodosEpic = (
  action$: Observable<AnyAction>,
  state$: RootStateOrAny,
  { todoInteractor }: { todoInteractor: { fetchTodos: fetchTodosUseCase } },
): Observable<AnyAction> =>
  action$.pipe(
    ofType(FETCH_TODOS),
    mergeMap(({ payload }) =>
      from(todoInteractor.fetchTodos(payload.userId)).pipe(
        map(response => fetchTodosResponse(response)),
        catchError(error => of(fetchTodosFailed(error.message))),
      ),
    ),
  );

export default combineEpics(fetchTodosEpic);
