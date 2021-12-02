import React from "react"
import cssClass from "./Users.module.css"
import avaImg from "./avatar/userAvatar.png"
import styled from "styled-components"
import axios from "axios"

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
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items)
        this.props.setTotalUsersCount(resp.data.totalCount)
        debugger
      })
  }

  onPageChanged = (pageNumber) => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                className={
                  this.props.currentPage === page && cssClass.selectPage
                }
                onClick={() => {
                  this.onPageChanged(page)
                }}
              >
                {page}
              </span>
            )
          })}
        </div>

        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photos.small != null ? user.photos.small : avaImg}
                  className={cssClass.photo}
                  alt=""
                />
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
              <UserCard>{user.name}</UserCard>
              <UserCard className="status">{user.status}</UserCard>
              <UserCard className="area">{"user.location.country"}</UserCard>
              <UserCard className="area">{"user.location.city"}</UserCard>
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
