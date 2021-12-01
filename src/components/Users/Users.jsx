import React from "react"
import cssClass from "./Users.module.css"
import * as axios from "axios"
import avaImg from "./avatar/userAvatar.png"

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items)
        })
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={avaImg} className={cssClass.photo} alt="" />
            </div>
            <div>
              {user.follow ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id)
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users

// props.setUsers([
//   {
//     id: 1,
//     follow: true,
//     fullName: "Ilya",
//     status: "I'm free",
//     location: { city: "Warwaw", country: "Poland" },
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCY6gNKi2rS6q6c57CrxPzxvajYRGC7n3w4Q&usqp=CAU",
//   },
//   {
//     id: 2,
//     follow: false,
//     fullName: "George",
//     status: "I have a beard. And bear",
//     location: { city: "Minsk", country: "Belarus" },
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
//   },
//   {
//     id: 3,
//     follow: true,
//     fullName: "Nikolai",
//     status: "I like node.js",
//     location: { city: "Deriv", country: "Belarus" },
//     photo:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt584rMTJ8Yqb6UxgqiV130sgnmDVEMSp8Bw&usqp=CAU",
//   },
// ])
