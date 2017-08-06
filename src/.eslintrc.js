module.exports = {
  extends: ['angular'],
  rules: {
    'linebreak-style': 'off',
    'angular/no-service-method': 0,
    'indent': ['error', 'tab', { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    'no-console': [1, { 'allow': ['warn', 'error'] }],
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
    'quote-props': 'off',
    'quotes': ["error", "single", { "avoidEscape": true }],
    'max-params': ["warn", 10],
    'angular/log': 'off'
  }
}
