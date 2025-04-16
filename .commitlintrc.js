module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [2, 'always', /^(\w+)\((PROJ-\d+)\): .+/],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
    ]
  }
}
