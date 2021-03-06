import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  USERS_LIST_RESET
} from "../constants/usersConstants";
import {User} from "../../api/models/User";

const initialState: UsersState = {
  loading: true,
  usersList: [],
  error: null
};

export const usersReducer = (state: UsersState = initialState, action: UsersAction) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        usersList: action.payload == null ? [{error: 'error'}] : action.payload?.usersList.map((item: any, index: number) => {
          return new User(
            `userKey-${index}`,
            item.name.first,
            item.name.last,
            item.gender,
            item.day,
            item.picture,
            item.phone,
            item.email,
          );
        }),
        error: null
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        usersList: [],
        error: action.payload?.error
      };
    case USERS_LIST_RESET:
      return {
        loading: false,
        usersList: [],
      };
    default:
      return state
  }
};