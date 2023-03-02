module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage",
				corejs: 3,
				debug: false,
			},
		],
	]
};

// For more info: 
// https://www.norrapscm.com/posts/2020-10-24-setup-and-debug-jest-to-use-es6-imports-in-node-v12-x-x/