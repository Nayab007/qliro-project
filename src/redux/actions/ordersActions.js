import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from "./types"
import { custmorData } from "../../components/custmorData"

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS_REQUEST, payload: null })
  await getOrders()
    .then((response) => {
      dispatch({ type: GET_ORDERS_SUCCESS, payload: response })
    })
    .catch((e) => {
      dispatch({ type: GET_ORDERS_FAILURE, payload: e })
    })
}

async function getOrders() {
  var promise = new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve(custmorData)
    }, 1000)
  })
  return promise
}
