import MyPosts from './MyPosts/MyPosts';
import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state}/>
            </div>
        </div>
    );
}

export default Profile;