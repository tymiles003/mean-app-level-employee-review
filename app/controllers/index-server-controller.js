(function(require, exports) {

	exports.render = function(req, res) {
		res.render('index', {
			user: JSON.stringify(req.user) // 'scott'
		});
	};
})(require, exports);
