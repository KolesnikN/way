import React from "react"
import cssClass from "./Users.module.css"
import avaImg from "./avatar/userAvatar.png"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`
const UserCard = styled.div`
  border: 1px solid white;
  font-size: 20px;
  transition: 0.2s;

  &.status {
    font-size: 20px;
    color: red;
    transition: 0.2s;
  }

  &.area {
    font-size: 20px;
    color: green;
    transition: 0.2s;
  }
`

class Users extends React.Component {
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
                  <StyledButton
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}
                  >
                    Unfollow
                  </StyledButton>
                ) : (
                  <StyledButton
                    onClick={() => {
                      this.props.follow(user.id)
                    }}
                  >
                    follow
                  </StyledButton>
                )}
              </div>
            </span>
            <div>
              <UserCard>{user.fullName}</UserCard>
              <UserCard className="status">{user.status}</UserCard>
              <UserCard className="area">{user.location.country}</UserCard>
              <UserCard className="area">{user.location.city}</UserCard>
            </div>
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
