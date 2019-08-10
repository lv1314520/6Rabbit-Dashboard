import { Epic } from ".";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { GET_THREAD_INFO_START, GET_THREAD_INFO_OK, IGetThreadInfoStart } from "../actions/async";
import { FETCH_THREAD } from "../consts/backend";
import axios from "axios";
import { from } from "rxjs";

const fetchThreadInfo: Epic<IGetThreadInfoStart> = action$ =>
    action$.pipe(
        ofType(GET_THREAD_INFO_START),
        mergeMap(({ tid, page }) =>
            from(axios({ url: FETCH_THREAD(tid, page) })).pipe(
                map(({ data }) => {
                    return {
                        type: GET_THREAD_INFO_OK,
                        payload: data
                    };
                })
            )
        )
    );

export default [fetchThreadInfo];