const Pageres = require('pageres');

(async () => {
	await new Pageres({delay: 2})
		.src('https://github.com/sindresorhus/pageres', ['1920x768'], {crop: false})
		.dest(__dirname)
		.run();

	console.log('Finished generating screenshots!');
})();