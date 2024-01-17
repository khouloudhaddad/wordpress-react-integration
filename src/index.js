import React from 'react';
import ReactDom from 'react-dom'
import TestComponent from './TestComponent';
import "./main.scss"

ReactDom.render(<TestComponent />, document.querySelector('#app'))