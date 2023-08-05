/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});
  
module.exports = withPWA({
    // async rewrites() {
    //     return [
    //       {
    //         source: '/:path*',//api request path
    //         destination: 'https://dev-api.snackexercise.com',//목적 path
    //       },
    //     ]
    // },
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
});