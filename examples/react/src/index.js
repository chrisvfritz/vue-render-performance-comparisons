import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import Benchmark from '../../../helpers/benchmark'

/* eslint-disable no-new */
new Benchmark((items, done) => {
  ReactDOM.render(
    <List items={items}/>,
    document.getElementById('root')
  )
  done()
})
