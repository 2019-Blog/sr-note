import axios from 'axios'
// import qs from 'qs'
import { Message } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const BASE_URL = 'http://localhost:3000'

// 统一对登录情况做处理
axios.interceptors.response.use(function (response) {
  if (response.data.code === 4021 || response.data.code === 4032 || response.data.code === 4004) {
    Message.error(response.data.msg)
    // setTimeout(() => {
    //   localStorage.removeItem('user')
    //   localStorage.removeItem('menu')
    //   localStorage.removeItem('userId')
    //   localStorage.removeItem('roleId')
    //   localStorage.removeItem('createDate')
    //   localStorage.removeItem('authorization')
    //   window.location.href = '/#/login'
    // }, 3000)
  } else {
    return response
  }
}, function (error) {
  // 当响应异常时做一些处理
  return Promise.reject(error)
})


export const addNote = params => { return axios({method: 'post', url: BASE_URL + '/api/blog/add', data: params}) }

export const getTitles = params => { return axios.get(BASE_URL + `/api/blog/getTitle`, { params: params }) }

export const getContent = params => { return axios.get(BASE_URL + `/api/blog/getcontent`, { params: params }) }
