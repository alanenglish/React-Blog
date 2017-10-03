import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// object with ids as key, value was post
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2]
      return _.mapKeys(action.payload.data, 'id'); // we want { 4: post }
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state, }
      // newState[post.id] = post;
      //   return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      // look at state object, if it has a key of action.payload, just omit it from that object
      // does not modify object, returns a new state object
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
