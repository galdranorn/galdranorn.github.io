import { combineReducers } from 'redux';
import AppReducer from './app-reducer';
import LocaleReducer from './locale-reducer';

const reducer = combineReducers({
    app: AppReducer,
    locale: LocaleReducer
});

export default reducer;