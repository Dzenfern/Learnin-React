import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Mouse from './mouse.jsx'
import React from 'react'

const reactElement= {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click Me to vist google"
}

const ReactStuff = React.createElement(
  reactElement.type,
  reactElement.props,
  reactElement.children
)

createRoot(document.getElementById('root')).render(
  ReactStuff
)