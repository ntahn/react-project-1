import * as ActionType from './constants';

let initialState = {
    loadingUpcoming: false,
    dataUpcoming: null,
    errUpcoming: null,
}

export const upcomingFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_UPCOMING_FILM_REQUEST:
            state.loadingUpcoming = true;
            state.dataUpcoming = null;
            state.errUpcoming= null;
            return {...state};
        case ActionType.ACT_UPCOMING_FILM_SUCCESS:
            state.loadingUpcoming = false;
            state.dataUpcoming = action.payload;
            state.errUpcoming = null;
            return {...state};
        case ActionType.ACT_UPCOMING_FILM_FAILED:
            state.loadingUpcoming = false;
            state.dataUpcoming = null;
            state.errUpcoming = action.payload;   
            return {...state}; 
        default:
            return {...state};
    }
}

export default upcomingFilmReducer;