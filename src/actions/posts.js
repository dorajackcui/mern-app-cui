import * as api from '../api/index'
import { FETCH_POST_DETAIL, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_ALL, DELETE, CREATE, UPDATE, LIKE } from '../constants/actionTypes'


//action creators 
export const getPosts = (page) => async(dispatch) => {
  try {
    dispatch ({ type: START_LOADING })
    const { data } = await api.fetchPosts(page)
    dispatch({ type:FETCH_ALL, payload: data })
    dispatch ({ type: END_LOADING })
  } catch (error) {
   console.log(error) 
  }
}

export const getPostById = (id) => async(dispatch) => {
  try {
    dispatch ({ type: START_LOADING })
    const { data } = await api.fetchPostById(id)
    
    dispatch({ type:FETCH_POST_DETAIL, payload: data })
    dispatch ({ type: END_LOADING })
  } catch (error) {
   console.log(error) 
  }
}

export const getPostsBySearch = (searchQuery) => async(dispatch) => {
  try {
    // data in data 
    dispatch ({ type: START_LOADING })
    const { data : { data } }  = await api.fetchPostsBySearch(searchQuery)
    dispatch({ type:FETCH_BY_SEARCH, payload: data })

    dispatch ({ type: END_LOADING })
  } catch (error) {
   console.log(error) 
  }
}

export const createPost = (post, history) => async(dispatch) => {
  try {
    dispatch ({ type: START_LOADING })
    const { data } = await api.createPost(post)
    dispatch({ type:CREATE, payload: data })
    dispatch ({ type: END_LOADING })
    history.push('/')
  } catch (error) {
   console.log(error) 
  }
}

export const updatePost = (id, updatePost) => async(dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatePost)
    dispatch({ type:UPDATE, payload: data })
  } catch (error) {
   console.log(error) 
  }
}

export const deletePost = (id) => async(dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type:DELETE, payload: id })
  } catch (error) {
   console.log(error) 
  }
}

export const likePost = (id) => async(dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type:LIKE, payload: data })
  } catch (error) {
   console.log(error) 
  }
}