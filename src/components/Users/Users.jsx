import React from "react"
import cssClass from "./Users.module.css"
import avaImg from "./avatar/userAvatar.png"
import axios from "axios"

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((resp) => {
        this.props.setUsers(resp.data.items)
      })
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img src={avaImg} className={cssClass.photo} alt="" />
              </div>
              <div>
                {user.follow ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
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
}

export default Users

// import axios from "axios"
// constructor(props) {
//   super(props)
//   axios
//     .get("https://social-network.samuraijs.com/api/1.0/users")
//     .then((resp) => {
//       this.props.setUsers(resp.data.items)
//     })
//   debugger
// }
