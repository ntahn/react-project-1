import { combineReducers } from 'redux';
import SearchReducer from '../../components/SearchBar/modules/reducer';
import filmNameReducer from '../../components/Modules/SearchFilm/reducer';
import listMovieReducer from '../../components/ListMovie/modules/reducer';
import upcomingFilmReducer from '../../components/Modules/UpcomingFilm/reducer';
import CinemaTableReducer from '../../components/CinemaTable/modules/reducer';

const rootReducer = combineReducers ({
    SearchReducer,
    filmNameReducer,
    listMovieReducer,
    upcomingFilmReducer,
    CinemaTableReducer,
});

export default rootReducer;