class KeystrokeListener {
	constructor (fireOn, callback) {
		this.keystack = [];
		this.fireOn = fireOn; // a string
		this.callback = callback;
		window.addEventListener('keypress', this.listener);
	}

	listener = (evt) => {
		this.keystack.push(evt.key);
		if (this.keystack.join('') === this.fireOn.substring(0, this.keystack.length)) {
			// Good so far
			if (this.keystack.length === this.fireOn.length) {
				// Exact match
				this.callback();
				this.keystack = [];
			}
		} else {
			// Bad match; start over
			this.keystack = [];
		}
	}

	remove = () => {
		window.removeEventListener('keypress', this.listener);
	}
}

export default KeystrokeListener;
