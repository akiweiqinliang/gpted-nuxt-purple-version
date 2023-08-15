export default {
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers: https://go.nuxtjs.dev/config-head
  pageTransition: {
    name: 'fade',
    mode: 'out-in', // default
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  head: {
    title: 'GPTED全球招标',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: '招标', content: 'GPTED全球招标' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'view-design/dist/styles/iview.css',
    'swiper/css/swiper.css',
    'flatpickr/dist/flatpickr.min.css',
    '@/assets/css/promote.scss',
    '@/assets/css/global.scss',
    '@/assets/css/globalColor.scss',
    '@/assets/css/page404.scss',
    '@/assets/css/customFlatpickr.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/view-ui',
    {
      src: '@/plugins/swiper.js',
      ssr: false,
    },
    {
      src: '@/plugins/flatPickr.js',
      ssr: false,
    },
    { src: '@/plugins/chart.js', ssr: false },
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://test.gpted.cn/api/private/v1/',
  },
  loading: {
    color: '#348fed',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyse: true,
    extend(config, { isDev, isClient }) {
      // config.module.rules.push({
      //   test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //   loader: 'file-loader',
      // })
      if (isDev) {
        config.mode = 'development';
      }
    },
  },
  ignore: ['pages/-play.html'],
};
