const path = require('path');

module.exports = {
  // Diğer yapılandırmalar
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      url: false, // veya true, projenizin gereksinimlerine bağlı olarak
    },
  },
};
