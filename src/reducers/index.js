import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //rename redux-form package reducer for ease of use

export default combineReducers({
    form: formReducer, //always assign the redux-form reducer to a key of form
});