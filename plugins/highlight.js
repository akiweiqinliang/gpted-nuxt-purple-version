import Vue from 'vue';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css'; // 根据需要选择样式文件
import javascript from 'highlight.js/lib/languages/javascript'; // 根据需要选择语言包

hljs.registerLanguage('javascript', javascript);

Vue.directive('highlight', {
  inserted: function (el, binding) {
    const keywords = binding.value;
    const text = el.innerText;
    const regex = new RegExp(keywords.join('|'), 'gi');
    el.innerHTML = text.replace(regex, '<span class="highlighted">$&</span>');
  },
});

Vue.prototype.$highlight = hljs;

export default (context, inject) => {
  inject('highlight', hljs);
};
