module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  devServer: {
    proxy: [
      {
        context: ['/user'],
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    ],
  },
};
