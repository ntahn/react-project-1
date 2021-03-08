import * as ActionType from './constants';

let initialState = {
    loading1: false,
    data1: null,
    err1: null,
}

export const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_MOVIE_SCHEDULE_REQUEST:
            state.loading1 = true;
            state.data1 = null;
            state.err1 = null;
            return {...state};
        case ActionType.ACT_MOVIE_SCHEDULE_SUCCESS:
            state.loading1 = false;
            state.data1 = action.payload;
            state.err1 = null;
            return {...state};
        case ActionType.ACT_MOVIE_SCHEDULE_FAILED:
            state.loading1 = false;
            state.data1 = null;
            state.err1 = action.payload;
            return {...state};   
        default:
            return {...state};
    }
}

export default scheduleReducer;