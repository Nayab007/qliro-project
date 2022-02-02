import React, { useState, useEffect } from "react"
import { AppBar, Typography } from "@material-ui/core"

const Header = ({ allOrders }) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    if (allOrders) {
      const { name, customer_id } = allOrders
      setData({ name, customer_id })
    }
  }, [allOrders])

  return (
    <AppBar position="static" className="header">
      {data && <Typography> {data.name + "(" + data.customer_id + ")"}</Typography>}
    </AppBar>
  )
}

export default Header
