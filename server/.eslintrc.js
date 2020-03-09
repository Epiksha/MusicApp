module.exports = {
    "extends": [
        "eslint:recommended",
		"eslint-config-airbnb-base",
		"plugin:node/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module"
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true
	},
	"rules": {
		"max-len": 0,
		"linebreak-style": [0],
		"no-trailing-spaces": 0,
		"indent": "off"
	}
}