import Vue from 'vue'
import List from './list.vue'
import Benchmark from '../../../helpers/benchmark'
/* eslint-disable no-new */
new Benchmark((items, done) => {
  var vm = new Vue({
    el: '#root',
    render (h) {
      return h('list', { props: {
        items: items
      } })
    },
    components: {
      List: List
    },
    mounted: done
  })
  setTimeout(function() {
     vm = null;
  }, 10);

})
