import * as ActionType from './constants';
import api from '../../../api';

export const actUpcomingFilmApi = () => {
    return dispatch => {
        dispatch(actUpcomingFilmRequest())
        api.get('QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=1&soPhanTuTrenTrang=8')
        .then((result) => {
            dispatch(actUpcomingFilmSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actUpcomingFilmFailed(err));
        })
    }
}

const actUpcomingFilmRequest = () => {
    return {
        type: ActionType.ACT_UPCOMING_FILM_REQUEST,
    }
}

const actUpcomingFilmSuccess = (data) => {
    return {
        type: ActionType.ACT_UPCOMING_FILM_SUCCESS,
        payload: data,
    }
}

const actUpcomingFilmFailed = (err) => {
    return {
        type: ActionType.ACT_UPCOMING_FILM_FAILED,
        payload: err,
    }
}