import MyPosts from "./MyPosts/MyPosts"
import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  )
}

export default Profile
