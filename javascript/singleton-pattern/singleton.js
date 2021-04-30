const { Username } = require("./Username");

const Singleton = (function () {
	var instance;

	function createInstance() {
		var classObj = new Username();
		return classObj;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

module.exports = Singleton;
