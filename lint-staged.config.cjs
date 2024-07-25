module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --cache --fix --max-warnings 0'],
  '**/*.ts?(x)': () => 'pnpm run build-types',
  '*.json': ['prettier --write'],
};
