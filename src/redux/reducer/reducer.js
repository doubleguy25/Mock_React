import { ADD_USER, DELETE_USER, EDIT_USER, GET_A_USER, GET_DATA_USER, SEARCH_USER, SORT_USER } from "../action/userAction";

const UserInitialState = {
  userList: [],
  getUser: {
    id: "",
    name: "",
    description: "",
    language: "",
    visibility: "",
    size: "",
  },
};
export const User = (state = UserInitialState, action) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case GET_A_USER:
      const user = state.userList.filter((user)=>user.id == action.payload)
      return {
        ...state,
        getUser: user[0]
      };
    case ADD_USER:
      return {
        ...state,
        userList: [action.payload,...state.userList ]
      };
    case EDIT_USER:
      console.log(action.payload);
      const newState = state.userList.filter(
        (user) => user.id != action.payload.id
      );
      return {
        ...state,
        userList: [action.payload,...newState ]
      };
    case DELETE_USER:
      const finalRes = state.userList.filter(
        (user) => user.id != action.payload
      );
      return {
        ...state,
        userList: finalRes,
      };
    case SEARCH_USER:
      const searchRes = state.userList.filter((user) =>
        user.name.includes(action.payload)
      );
      return {
        ...state,
        userList: searchRes,
      };
      case SORT_USER:
        const sortRes = state.userList.sort((a,b) => (a[action.payload] > b[action.payload]) ? 1 : ((b[action.payload] > a[action.payload]) ? -1 : 0))
        return {
          ...state,
          userList: sortRes,
        };
      
    default:
      return state;
  }
};
