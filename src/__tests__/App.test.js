import React from "react"
import { Provider } from "react-redux"
import { cleanup, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "../App"
import store from "../redux/store/index"


afterEach(cleanup)


describe("Make sure I can submit App", () => {
  function renderApp(store, props = {}) {
    return render(
      <Provider store={store}>
        
         <App /> 
      </Provider>
    )
    
  }
 

  test("testing indicator", async () => {
    renderApp(store,)
    expect(screen.getByRole("progressbar").classList[0]).toBe("MuiCircularProgress-root")
  })
  
  
})
