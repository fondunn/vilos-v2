import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '@store/root-reducer'
import multiClientMiddleware from '@middleware/axios'
import { composeWithDevTools } from '@redux-devtools/extension'

const middlewares = [thunk, multiClientMiddleware, logger]
const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, composeEnhancer)

export default store