import { Epic } from ".";
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { GET_FORUM_LIST_START, GET_FORUM_LIST_OK, IGetForumListStart, GET_FORUM_START, IGetForumStart } from "../actions/async";
import { FETCH_FORUM_LIST, FETCH_FORUM } from "../consts/backend";
import { IThreadListItem } from "../typings";
import axios from "axios";
import { from, of } from "rxjs";
import FrontendRequest from "../model/FrontendRequest";
import { enqueueSnackbar, changeForum } from "../actions";

const fetchForumList: Epic<IGetForumListStart> = action$ =>
    action$.pipe(
        ofType(GET_FORUM_LIST_START),
        mergeMap(action =>
            from(axios({ url: FETCH_FORUM_LIST(action.page), method: "GET" })).pipe(
                map(({ data: { message } }) => {
                    const list: Array<IThreadListItem> = message.list as Array<IThreadListItem>;
                    const total = message.forum.threads;

                    return {
                        type: GET_FORUM_LIST_OK,
                        payload: {
                            list,
                            total
                        }
                    };
                })
            )
        )
    );

const fetchForum: Epic<IGetForumStart> = action$ =>
    action$.pipe(
        ofType(GET_FORUM_START),
        mergeMap(() =>
            FrontendRequest({ url: FETCH_FORUM, method: "GET" }).pipe(
                mergeMap(({ data: { code, message } }) => {
                    if (code === 200) {
                        return of(changeForum(message));
                    } else {
                        return of(enqueueSnackbar(message, { variant: "error" }));
                    }
                })
            )
        )
    );

export default [fetchForumList, fetchForum];
