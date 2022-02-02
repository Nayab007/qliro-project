import React, { useState, useEffect } from "react"
import Orders from "./Orders"
import Header from "./Header"
import Contact from "./Contact"
import { CircularProgress, Box } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../redux/actions/ordersActions"
const OrdersList = () => {
  const dispatch = useDispatch()
  const { ordersReducer } = useSelector((state) => state)
  const { orders, loading } = ordersReducer
  const [allOrders, setAllOrders] = useState(null)
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  useEffect(() => {
    if (orders) {
      setAllOrders(orders)
    }
  }, [orders])

  return (
    <Box data-testid="orders_list">
      {loading ? (
        <Box textAlign="center" height="100vh" display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size={30} />
        </Box>
      ) : (
        <>
          <Header allOrders={allOrders} />
          <Contact allOrders={allOrders} />
          <Orders allOrders={allOrders} />
        </>
      )}
    </Box>
  )
}

export default OrdersList
