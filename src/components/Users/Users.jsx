import React from "react"
import cssClass from "./Users.module.css"
import avaImg from "./avatar/userAvatar.png"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

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

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
              className={props.currentPage === page && cssClass.selectPage}
              onClick={() => {
                props.onPageChanged(page)
              }}
            >
              {page}
            </span>
          )
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : avaImg}
                  className={cssClass.photo}
                />
              </NavLink>
            </div>
            <div>
              {user.follow ? (
                <StyledButton
                  onClick={() => {
                    props.unfollow(user.id)
                  }}
                >
                  Unfollow
                </StyledButton>
              ) : (
                <StyledButton
                  onClick={() => {
                    props.follow(user.id)
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

export default Users
