module.exports.Username = class Username {
	constructor() {
		this._username;
	}

	set username(value) {
		this._username = value;
	}

	get username() {
		return this._username;
	}
};
