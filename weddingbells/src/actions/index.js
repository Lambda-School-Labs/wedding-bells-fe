import axios from "axios";

// add additional actions with:
// export const ${action_name} = '${action_name}';

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const TOGGLE_AUTH_MODAL = "TOGGLE_AUTH_MODAL";

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL || "http://localhost:5000";

export const login = creds => dispatch => {
	console.log(creds);
	dispatch({ type: LOGIN_START });
	return axios.post(`${BACKEND_API_URL}/api/auth/login`, creds).then(res => {
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("couple", JSON.stringify(res.data.couple));
		dispatch({ type: LOGIN_SUCCESS, payload: res.data.couple });
	});
};

export const signup = creds => dispatch => {
	dispatch({ type: SIGNUP_START });
	return axios.post(`${BACKEND_API_URL}/api/auth/register`, creds);
};

export const signout = () => dispatch => {};

export const toggleAuthModal = () => dispatch => {
	dispatch({ type: TOGGLE_AUTH_MODAL });
};
