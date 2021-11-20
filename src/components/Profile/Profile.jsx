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
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updatePostText={props.updatePostText}
        />
      </div>
    </div>
  )
}

export default Profile
