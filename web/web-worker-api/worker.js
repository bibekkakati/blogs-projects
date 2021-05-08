self.onmessage = function (e) {
	const value = Math.sqrt(e.data);
	self.postMessage(value);
};
