module.exports = {
	apps : [{
		name: 'my-site',
		script: "node_modules/next/dist/bin/next",
		args: "start",
		watch: true,
		watch_delay: 1000,
	}]
}
