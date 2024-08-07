module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	env: {
		node: true
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts']
			}
		}
	},
	rules: {
		quotes: [
			'warn',
			'single'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'comma-dangle': [
			'warn',
			'never'
		],
		semi: [
			'warn',
			'never'
		],
		'import/order': [
			'warn',
			{
				'alphabetize': {
					'caseInsensitive': false,
					'order': 'asc'
				},
				'groups': [
					'builtin',
					'external',
					'parent',
					'sibling',
					'index'
				],
				'newlines-between': 'always',
				// From https://github.com/benmosher/eslint-plugin-import/issues/1682
				'pathGroupsExcludedImportTypes': []
			}
		],
		'@typescript-eslint/no-unused-vars': ['warn', {
			vars: 'local',
			ignoreRestSiblings: true
		}
		],
		indent: [
			'warn', 'tab', {
				SwitchCase: 1,
				VariableDeclarator: 'first',
				MemberExpression: 1,
				FunctionDeclaration: { body: 1, parameters: 2 }
			}
		],
		'import/no-named-as-default': 0,
		'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-this-alias': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-shadow': [
			'error'
		],
		'@typescript-eslint/no-use-before-define': [
			'error'
		],
		'@typescript-eslint/no-useless-constructor': [
			'error'
		]
	}
}