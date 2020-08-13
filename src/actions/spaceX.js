import types from "../types";
import { getAllDataAPI } from "../api/spaceX"

export const getAllData = payload => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: types.GET_ALL_DATA
        });
        getAllDataAPI(payload)
            .then(res => {
                dispatch({
                    type: types.GET_ALL_DATA_SUCCESS,
                    payload: res
                });

                return resolve(res);
            })
            .catch(err => {
                dispatch({
                    type: types.GET_ALL_DATA_FAILED
                });
                return reject(err);
            });
    });
}

