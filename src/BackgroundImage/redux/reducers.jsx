import {constants} from './constants';
import { combineReducers } from 'redux';

function fills(state = [], action) {
	switch (action.type) {
	// Doc Models
	case constants.fills.SET:
		return action.fills;
	default:
		return state;
	}
}

export function loading(state = true, action) {
	switch (action.type) {
		// On Success
		case constants.loading.SUCCESS:
			return action.loading;
		// On Failure
		case constants.loading.FAILURE:
			return action.loading;
		default:
			return state;
	}
}

export const Reducers = combineReducers({
	fills
});