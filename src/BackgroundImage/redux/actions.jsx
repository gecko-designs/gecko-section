import { constants } from './constants';

/**
 * Docs Actions.
 * @namespace product
 * @memberof module:actions
 */
const fills = (fills) => {
	return {
		type: constants.fills.SET,
		fills: fills,
	};
};

export const actions = {
	fills
};
