import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import 'semantic-ui-css/semantic.min.css'
import App from './App'
import reducers from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} > 
        <App /> 
    </Provider>, 
    document.getElementById('root'))
