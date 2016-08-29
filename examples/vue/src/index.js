import Vue from 'vue'
import List from './List'
import Benchmark from '../../../helpers/benchmark'

/* eslint-disable no-new */
new Benchmark((items, done) => {
  new Vue({
    el: '#root',
    render (h) {
      return (
        <div id='root'>
          <List items={items}/>
        </div>
      )
    },
    mounted: done
  })
})
