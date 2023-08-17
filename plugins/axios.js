import pageCode from '~/enums/pageCodes';

export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    const token = store.getters.getToken;
    if (token) {
      config.headers.Authorization = token;
    }
    console.log('Making request to ' + config.url);
    return config;
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect({ name: pageCode.ERROR });
    }
  });
}
