import * as ActionType from './constants';

let initialState = {
    loading: false,
    cinemaData: null,
    err: null,
}

const CinemaTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_CINEMA_TABLE_REQUEST:
            state.loading = true;
            state.cinemaData = null;
            state.err = null;
            return {...state};
        case ActionType.ACT_CINEMA_TABLE_SUCCESS:
            state.loading = false;
            state.cinemaData = action.payload;
            state.err = null;
            return {...state};
        case ActionType.ACT_CINEMA_TABLE_FAILED:
            state.loading = false;
            state.cinemaData = null;
            state.err = action.payload;    
            return {...state};
        default:
            return {...state};
    }
}

export default CinemaTableReducer;