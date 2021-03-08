import * as ActionType from './constants';
import api from '../../../../api';

export const actDetailMovieApi = (tenPhim) => {
    return dispatch => {
        dispatch(actDetailMovieRequest)
        api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`)
        .then((result) => {
            dispatch(actDetailMovieSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actDetailMovieFailed(err))
        })
    }
}

const actDetailMovieRequest = () => {
    return {
        type: ActionType.ACT_DETAIL_MOVIE_REQUEST,
    };
}

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.ACT_DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
}

const actDetailMovieFailed = (err) => {
    return {
        type: ActionType.ACT_DETAIL_MOVIE_FAILED,
        payload: err,
    };
}