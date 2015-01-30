var q = require('q');

module.exports = function(fn) {

	return function(request, response) {
		q.when({})

			.then(function() {
				return fn(request, response);
			})
			.then(function(data) {
				response.json(_.extend({ok: 1}, data));
			})
			.catch(function(error) {
				response.json({error: "" + error});
				if(error.stack) {
					console.error(error.stack);
				}
			});
    }
};