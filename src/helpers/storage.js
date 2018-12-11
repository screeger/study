import * as constants from './constants';

export function getAll () {
	let entries = [];
	for (let i = 0; i < constants.MAX_SCENARIOS; i++) {
		entries.push(window.localStorage.getItem('scene' + i));
	}
	return entries;
}

export function setItem(key, value) {
	window.localStorage.setItem(key, value);
}
