import { combineReducers } from 'redux';
import LocaleReducer from './locale-reducer';
import ProjectsReducer from './projects-reducer';

const reducer = combineReducers({
    locale: LocaleReducer,
    projects: ProjectsReducer,
});

export default reducer;