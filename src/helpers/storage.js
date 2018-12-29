/**
 * All values are JSON stringified.
 */

export function getPonderboxKeys () {
	const storage = window.localStorage;
	const ponderKeys = [];
	for (let i = 0, j = storage.length; i < j; i++) {
		if (/^s\d+p\d+/.test(storage.key(i))) {
			ponderKeys.push(storage.key(i));
		}
	}
	ponderKeys.sort((a, b) => {
		const parsedA = /s(\d+)p(\d+)/.exec(a);
		const parsedB = /s(\d+)p(\d+)/.exec(b);
		if (parseInt(parsedA[1],10) < parseInt(parsedB[1],10)) {
			return -1;
		}
		if (parseInt(parsedA[1],10) > parseInt(parsedB[1],10)) {
			return 1;
		}
		if (parseInt(parsedA[2],10) < parseInt(parsedB[2],10)) {
			return -1;
		}
		if (parseInt(parsedA[2],10) > parseInt(parsedB[2],10)) {
			return 1;
		}
		return 0;
	});
	return ponderKeys;
}

export function getForPage(storageId) {
	const storage = window.localStorage;
	const entries = [];
	for (let i = 0, j = storage.length; i < j; i++) {
		const regex = new RegExp(`^${storageId}_\\d`);
		const key = storage.key(i);
		if (regex.test(key)) {
			entries.push({ key, value: JSON.parse(storage.getItem(key)) });
		}
	}
	return entries;
}

export function setItem(key, value) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem (key) {
	return JSON.parse(window.localStorage.getItem(key));
}

export function clear() {
	window.localStorage.clear();
}
