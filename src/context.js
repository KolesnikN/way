import React from "react"
//realize redux
const StoreContext = React.createContext(null)

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext
