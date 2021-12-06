import axios from "axios"

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((resp) => {
        return resp.data
      })
  },
  getProfile(userId) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId
    )
  },
  authAPI() {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
  },
}
