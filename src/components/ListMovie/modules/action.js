import * as ActionType from './constants';
import api from '../../../api';

export const actListMovieApi = () => {
    return dispatch => {
        dispatch(actListMovieRequest())
        api.get('QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8')
        .then((result) => {
            dispatch(actListMovieSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actListMovieFailed(err));
        })
    }
}

const actListMovieRequest = () => {
    return {
        type: ActionType.ACT_LIST_MOVIE_REQUEST,
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.ACT_LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

const actListMovieFailed = (err) => {
    return {
        type: ActionType.ACT_LIST_MOVIE_FAILED,
        payload: err,
    }
}  

