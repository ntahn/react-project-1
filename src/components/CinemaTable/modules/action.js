import * as ActionType from './constants';
import api from '../../../api';

export const actCinemaTableApi = (maRap) => {
    return dispatch => {
        dispatch(actCinemaTableRequest)
        api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`)
        .then((result) => {
            dispatch(actCinemaTableSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actCinemaTableFailed(err));
        })
    }
}

const actCinemaTableRequest = () => {
    return {
        type: ActionType.ACT_CINEMA_TABLE_REQUEST,
    };
};

const actCinemaTableSuccess = (data) => {
    return {
        type: ActionType.ACT_CINEMA_TABLE_SUCCESS,
        payload: data,
    };
};

const actCinemaTableFailed = (err) => {
    return {
        type: ActionType.ACT_CINEMA_TABLE_FAILED,
        payload: err,
    };
};