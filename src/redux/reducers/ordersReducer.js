import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from "../actions/types"
const INIT_STATE = {
  orders: null,
  loading: false,
}

/* get order information */
const ordersReducer = (state = INIT_STATE, { payload, type }) => {
  switch (type) {
    case GET_ORDERS_REQUEST:
      return { ...state, loading: true }
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: payload }
    case GET_ORDERS_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
export default ordersReducer
