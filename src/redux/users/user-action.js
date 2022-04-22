import axios from "axios";

export const fetchUsersStart = () => ({
  type: "FETCH_USERS_START",
});

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: "FETCH_USERS_FAILURE",
  payload: errorMessage,
});

export const fetchUsersAsync = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data.map((item) => ({
          id: item.id,
          username: item.username,
          email: item.email,
        }));
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
