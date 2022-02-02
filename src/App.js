import { Box } from "@material-ui/core"

import OrdersList from "./components/OrdersList"
import "./App.scss"

function App() {
  return (
    <Box className="App" id="orders_app">
      <OrdersList />
    </Box>
  )
}

export default App
