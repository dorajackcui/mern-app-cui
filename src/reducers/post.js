import { FETCH_POST_DETAIL } from '../constants/actionTypes'


const post = (post = {}, action) => {
  switch (action.type) {
    case FETCH_POST_DETAIL:
        return action.payload
      default:
        return post
  }
}

export default post