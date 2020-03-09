module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "eslint-config-airbnb-base"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true,
		"jest": true
	},
	"rules": {
		"max-len": 0,
		"linebreak-style": [0],
		"no-trailing-spaces": 0,
		"indent": "off",
		"vue/html-indent": "off"
	}
}