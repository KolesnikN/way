import React from "react"
import loading from "./loading.svg"

const Loading = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={loading} />
    </div>
  )
}

export default Loading
