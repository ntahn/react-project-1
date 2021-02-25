import * as ActionType from './constants';
import api from '../../../api';

export const actFilmNameApi = () => {
    return dispatch => {
        dispatch(actFilmNameRequest());
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP10")
        .then((result) => {
            dispatch(actFilmNameSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actFilmNameFailed(err));
        })
    }
}

const actFilmNameRequest = () => {
    return {
        type: ActionType.ACT_FILM_REQUEST,
    };
}

const actFilmNameSuccess = (data) => {
    return {
        type: ActionType.ACT_FILM_SUCCESS,
        payload: data,
    };
}

const actFilmNameFailed = (err) => {
    return {
        type: ActionType.ACT_FILM_FAILED,
        payload: err,
    };
}