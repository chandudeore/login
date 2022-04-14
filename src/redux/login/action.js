//action types
export const LOGIN_LOADING = "LOGIN_LOADING";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOG_OUT ="LOG_OUT"

//actoion creators

export const login_loading = () => {
  return { type: LOGIN_LOADING };
};

export const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout=()=>{
  return{
    type:LOG_OUT
  }
}
