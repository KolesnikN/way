import React from "react"
import Loading from "../../common/loading/Loadings"
import cssClass from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  // if (!props.profile) {
  //   return <Loading />
  // }
  return (
    <div>
      <img
        src={props.profile.photos.large}
        alt="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
      />
    </div>
  )
}

export default ProfileInfo
