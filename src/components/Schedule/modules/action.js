import * as ActionType from './constants';
import api from '../../../api';

export const actMovieScheduleApi = (maRap) => {
    return dispatch => {
        dispatch(actMovieScheduleRequest)
        api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`)
        .then((result) => {
            dispatch(actMovieScheduleSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actMovieScheduleFailed(err));
        })
    }
}

const actMovieScheduleRequest = () => {
    return {
        type: ActionType.ACT_MOVIE_SCHEDULE_REQUEST,
    };
}

const actMovieScheduleSuccess = (data) => {
    return {
        type: ActionType.ACT_MOVIE_SCHEDULE_SUCCESS,
        payload: data,
    };
}

const actMovieScheduleFailed = (err) => {
    return {
        type: ActionType.ACT_MOVIE_SCHEDULE_FAILED,
        payload: err,
    }
}