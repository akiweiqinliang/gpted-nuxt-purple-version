// eslint-disable-next-line nuxt/no-cjs-in-config
const TerserPlugin = require('terser-webpack-plugin');
// eslint-disable-next-line nuxt/no-cjs-in-config
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// eslint-disable-next-line nuxt/no-cjs-in-config
const HtmlWebpackPlugin = require('html-webpack-plugin');
export default {
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    NODE_ENV: process.env.NODE_ENV,
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
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'child-src https:',
        },
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
  css: ['@/assets/css/main.scss', '@/assets/css/theme/index.less'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/view-ui',
    {
      src: '@/plugins/swiper.js',
      ssr: false,
    },
    {
      src: '@/plugins/flatPickr.js',
    },
    {
      src: '@/plugins/axios',
      ssr: true, // 默认为true，会同时在服务端（asyncData（{$axios}））和客户端（this.$axios）同时拦截axios请求，设为false就只会拦截客户端
    },
    { src: '@/plugins/highlight.js', mode: 'client' },
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
    // 'nuxt-aos',
    // 'nuxt-lazy-load',
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
  // aos: {
  //   // Global settings:
  //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //   initClassName: 'aos-init', // class applied after initialization
  //   animatedClassName: 'aos-animate', // class applied on animation
  //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  //
  //
  //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //   offset: 120, // offset (in px) from the original trigger point
  //   delay: 0, // values from 0 to 3000, with step 50ms
  //   duration: 400, // values from 0 to 3000, with step 50ms
  //   easing: 'ease', // default easing for AOS animations
  //   once: false, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  // },
  // lazyLoad: {
  //   // These are the default values
  //   images: true,
  //   videos: true,
  //   audios: true,
  //   iframes: true,
  //   native: false,
  //   directiveOnly: false,
  //
  //   // Default image must be in the public folder
  //   // defaultImage: '/images/default-image.jpg',
  //
  //   // To remove class set value to false
  //   loadingClass: 'isLoading',
  //   loadedClass: 'isLoaded',
  //   appendClass: 'lazyLoad',
  //
  //   observerConfig: {
  //     // See IntersectionObserver documentation
  //   }
  // },
  loading: {},
  server: {
    port: process.env.PORT, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false,
    // hot: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // postcss: {
    //   plugins: {
    //     'postcss-px-to-viewport-8-plugin': {
    //       unitToConvert: 'px', // 需要转换的单位，默认为"px"
    //       viewportWidth: 1440, // 设计稿的视口宽度
    //       unitPrecision: 5, // 单位转换后保留的精度
    //       propList: ['*', '!min-width', 'font-size'], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
    //       viewportUnit: 'vw', // 希望使用的视口单位
    //       fontViewportUnit: 'vw', // 字体使用的视口单位
    //       // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    //       // 下面配置表示类名中含有'keep-px'都不会被转换
    //       selectorBlackList: ['keep-px'],
    //       minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
    //       mediaQuery: false, // 媒体查询里的单位是否需要转换单位
    //       replace: true, //  是否直接更换属性值，而不添加备用属性
    //       exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //       include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
    //       landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    //     },
    //   },
    // },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
    rules: [
      // {
      //   test: /\.(vue|jsx?)$/,
      //   loader: 'postcss-style-px-to-viewport',
      //   options: {
      //     unitToConvert: 'px',
      //     ignoreUnitCase: true, // 默认会忽略大小写来转换unitToConvert的匹配值 如px、PX、Px、pX各个情况。如果设置为false 则只匹配 px
      //     viewportWidth: 1440,
      //     propList: ['*'],
      //     unitPrecision: 5,
      //     viewportUnit: 'vw',
      //     fontViewportUnit: 'vw',
      //     minPixelValue: 1,
      //     exclude: [/node_modules/],
      //   }
      // },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production',
              optipng: {
                optimizationLevel: 5,
              },
            },
          },
        ],
      },
    ],
    plugins: [
      new HtmlWebpackPlugin(),
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        test: /.(jpe?g|png|gif|svg)$/i,
        optipng: {
          optimizationLevel: 5,
        },
      }),
    ],
    optimization: {
      minimizer: [],
      splitChunks: {
        chunks: 'all', // 提取所有模块
        minSize: 30000, // 模块的最小大小
        minChunks: 1, // 模块的最小引用次数
        maxAsyncRequests: 5, // 并行加载的最大请求数量
        maxInitialRequests: 3, // 入口模块的最大请求数量
        maxSize: 200000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的模块
            name: 'vendor', // 提取出的公共模块的名称
            chunks: 'all', // 提取所有模块
          },
        },
      },
    },
    analyse: true,
    babel: {
      presets: ['@nuxt/babel-preset-app'],
    },
    publicPath: '/static/', // 配置打包的静态资源文件目录。可以是cdn地址
    // devtools: true,
    extend(config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      if (isDev) {
        // config.devtool = 'eval-source-map';
      }
      if (isClient) {
        // config.devtool = 'none';
        config.optimization.minimize = true;
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: {
                // drop_console: true, // 移除console语句
              },
              output: {
                // 是否保留代码注释
                comments: false,
              },
            },
          })
        );
      }
    },
  },
  ignore: ['pages/-play.html'],
};
