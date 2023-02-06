module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
	},
	lint: "eslint ./src",
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		rules: {
			"no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
		},
	},
};
