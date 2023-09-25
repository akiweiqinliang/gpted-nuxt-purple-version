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
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true }) || {};
    const metaTags =
      this.$i18n.locale === 'zh'
        ? [{ name: '招标', content: 'GPTED全球招标' }]
        : [{ name: 'Tender', content: 'GPTED global tender' }];
    const routerName = this.$route.name;
    return {
      title:
        this.$i18n.locale === 'zh'
          ? routerName + ' | GPTED全球招标'
          : routerName + ' | GPTED global tender',
      htmlAttrs: {
        lang: this.$i18n.locale,
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        // { name: '招标', content: 'GPTED全球招标' },
        ...metaTags,
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link,
      ],
    };
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
    '@/assets/css/theme/index.less',
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
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://test.gpted.cn/api/private/v1/',
  },
  i18n: {
    /* module options */
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh-CN.js',
      },
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      fallbackLocale: 'zh',
      redirectOn: 'root',
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    vueI18n: {
      fallbackLocale: 'zh',
    },
  },
  loading: {
    color: '#7E3AF7',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },

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
