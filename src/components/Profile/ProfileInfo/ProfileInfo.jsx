import React from "react"
import Loading from "../../common/loading/Loadings"
import cssClass from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loading />
  }
  return (
    <div className={cssClass.descriptionBlock}>
      <img
        src={props.profile.photos.large}
        alt="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
      />
      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo
