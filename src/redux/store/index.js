import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunk from "redux-thunk"

export let store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)))
export default store
