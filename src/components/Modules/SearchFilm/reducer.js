import * as ActionType from './constants';

let initialState = {
    loadingFilm: false,
    dataFilm: null,
    errFilm: null,
}

const filmNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ACT_FILM_REQUEST:
            state.loadingFilm = true;
            state.dataFilm = null;
            state.errFilm = null;
            return { ...state };
        case ActionType.ACT_FILM_SUCCESS:
            state.loadingFilm = false;
            state.dataFilm = action.payload;
            state.errFilm = null;
            return { ...state };
        case ActionType.ACT_FILM_FAILED:
            state.loadingFilm = false;
            state.dataFilm = null;
            state.errFilm = action.payload;
            return { ...state };
        default:
            return {...state};
    }
}

export default filmNameReducer;