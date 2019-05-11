import { combineReducers } from 'redux';
import LocaleReducer from './locale-reducer';

const reducer = combineReducers({
    locale: LocaleReducer
});

export default reducer;