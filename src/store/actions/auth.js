import axios from 'axios';
import { setAlert } from './alert';
import { 
  LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGOUT, CLEAR_PROFILE 
} from './types';


//======================================================================
//                          Load user
//======================================================================
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/auth/me");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};


//======================================================================
//                              Login
//======================================================================
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email: email, password: password });

  try {
    const res = await axios.post("/api/v1/auth/login", body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());

  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger"));
    dispatch({ type: LOGIN_FAIL });
  }
};


//======================================================================
//                           Register
//======================================================================
export const register = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  try {
    const res = await axios.post("/api/v1/auth/register", body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());

  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger"));
    dispatch({ type: REGISTER_FAIL });
  }
};


//======================================================================
//                      Logout / Clear profile
//======================================================================
export const logout = () => async (dispatch) => {
  await axios.get("/api/v1/auth/logout");
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};



