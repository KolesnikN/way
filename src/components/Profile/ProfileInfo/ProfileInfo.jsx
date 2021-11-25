import React from "react"
import cssClass from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"></img>
      <div className={cssClass.descriptionBlock}>
        What are you looking for? Yeah I am extra line
      </div>
    </div>
  )
}

export default ProfileInfo
