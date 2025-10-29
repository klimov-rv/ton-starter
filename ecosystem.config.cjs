module.exports = {
  apps: [
    {
      name: 'DemoNuxt3',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      env: {
        NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
        NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
        NUXT_PUBLIC_WS_BASE_URL: process.env.NUXT_PUBLIC_WS_BASE_URL,
        NODE_ENV: 'dev'
      }
    },
  ],
};
