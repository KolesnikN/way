import React from 'react'
import cssClass from './Profile.module.css'

const Profile = () => {
  return (
    <div className={cssClass.content}>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"></img>
      <div>
        avatar+description
      </div>
        <div>
        My posts
        <div>
          New
        </div>
        <div className='posts'>
          <div className={cssClass.item}>
            post 1
          </div>
          <div className={cssClass.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;