const isGit = process.env.ESLINT_ENV === 'GIT';

module.exports = {
  root: true,
  "env": {
    node: true,
    browser: true,
  },
  "extends": ['plugin:vue/recommended'],
  "rules": {
    "no-console": isGit ? "error" : "warn"
  },
  plugins: ['vue']
}