import React from 'react'
import { render } from 'react-dom'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
