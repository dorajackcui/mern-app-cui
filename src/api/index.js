import axios from 'axios'

const API = axios.create({
  baseURL : 'http://localhost:5000'
})

//backend url
// 'https://mern-app-cui.herokuapp.com'

// send token back to backend
API.interceptors.request.use((req )=> {
  if(localStorage.getItem('profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
  }
  return req 
})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`, likePost)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)