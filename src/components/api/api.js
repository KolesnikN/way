import axios from "axios"

export const usersAPI = (currentPage, pageSize) => {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      { withCredentials: true }
    )
    .then((resp) => {
      return resp.data
    })
}

export const authAPI = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true,
  })
}

export const getProfileAPI = (userId) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/` + userId, {
    withCredentials: true,
  })
}
