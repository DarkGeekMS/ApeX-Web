module.exports = {
  plugins: [
    '../',
    'plugins/markdown',
  ],
  source: {
    include: [
      'components/',
     
      'README.md',
    ],
    includePattern: '\\.(vue|js)$',
  },
  opts: {
    encoding: 'utf8',
  },
};
