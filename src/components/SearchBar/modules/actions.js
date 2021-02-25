import api from '../../../api';
import * as ActionType from './constants';

export const actSearchApi = () => {
    return dispatch => {
        dispatch(actSearchRequest());
        api.get("QuanLyRap/LayThongTinHeThongRap")
        .then((result) => {
            dispatch(actSearchSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actSearchFailed(err));
        })
    }
}

const actSearchRequest = () => {
    return {
        type: ActionType.ACT_SEARCH_REQUEST,
    };
}

const actSearchSuccess = (data) => {
    return {
        type: ActionType.ACT_SEARCH_SUCCESS,
        payload: data,
    };
}

const actSearchFailed = (err) => {
    return {
        type: ActionType.ACT_SEARCH_FAILED,
        payload: err,
    };
}