import MyPosts from './MyPosts/MyPosts';
import React from 'react'
import cssClass from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </div>
        </div>
    );
}

export default Profile;