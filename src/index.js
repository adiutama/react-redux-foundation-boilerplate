import React from 'react'
import { render } from 'react-dom'

const store = configureStore()

render(
    <p>Hello world!</p>,
    document.getElementById('root')
)
