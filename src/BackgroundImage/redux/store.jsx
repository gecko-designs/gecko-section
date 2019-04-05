import {createStore, applyMiddleware} from 'redux';
import {Reducers} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * @memberof module:helpers
 * @property {object} store
 */
const devTools = composeWithDevTools({ name: 'component/fills' });
export const store = createStore(
	Reducers,
	devTools()
);


