/* we need our action types here*/
import { FETCHING, SUCCESS, FAILURE } "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state }

    case SUCCESS:
      return { ...state }

    case FAILURE:
      return { ...state }

    default:
      return state;
  }
};
