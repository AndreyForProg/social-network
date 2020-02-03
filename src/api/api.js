import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API-KEY': 'd6fb20c2-be37-481d-8c4e-1c7e71faa9ba'
  }
})

export const API = {
  getUsersPage(countUsersOnPage=10, activeP=1) {
    return instance.get(`users?count=${countUsersOnPage}&&page=${activeP}`)
    .then(response => response.data)
  },

  activePagination(n=1, countUsersOnPage=10) {
    return instance.get(`users?page=${n}&&count=${countUsersOnPage}`)
    .then(response => response.data)
  },

  followUser(id) {
    return instance.delete(`follow/${id}`)
  },

  unfollowUser(id) {
    return instance.post(`follow/${id}`)
  },

  authMe() {
    return instance.get(`$auth/me`)
  },

  contentPage () {
    return instance.get(`profile/2`)
  }
}