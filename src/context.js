import React from "react"
//context training
const StoreContext = React.createContext(null)

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext
