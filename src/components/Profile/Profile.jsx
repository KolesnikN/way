import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import ProfileContainer from "./ProfileContainer";

const Profile = (props) => {
  return (
    <div>
        <ProfileInfo profile={props.profile} />
        <ProfileContainer />
    </div>
  )
}

export default Profile
