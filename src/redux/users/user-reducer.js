const initialState = {
  users: [],
  isFetching: false,
  errorMessage: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS_START":
      return { ...state, isFetching: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, isFetching: false, users: payload };
    case "FETCH_USERS_FAILURE":
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};

export default userReducer;
