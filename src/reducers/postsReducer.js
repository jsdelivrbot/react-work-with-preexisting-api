import _ from 'lodash';

import * as actionTypes from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      // es6 Computed property names
      return { ...state, [action.payload.data.id]: action.payload.data };

    case actionTypes.FETCH_POSTS:
      return action.payload.data.reduce((response, post) => {
        response[post.id] = post;
        return response;
      }, {});

    case actionTypes.DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}