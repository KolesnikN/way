import React from "react"
//prepare for redux
const StoreContext = React.createContext(null)

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext
