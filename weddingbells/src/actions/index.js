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
export const LOG_OUT = "LOG_OUT";

const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axios.post(`${envVarPage}/api/auth/login`, creds).then(res => {
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("couple", JSON.stringify(res.data.couple));
		localStorage.setItem("wedding", JSON.stringify(res.data.wedding));
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
	});
};

export const signup = creds => dispatch => {
	dispatch({ type: SIGNUP_START });
	return axios.post(`${envVarPage}/api/auth/register`, creds).then(res => {
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("couple", JSON.stringify(res.data.couple));
		dispatch({ type: SIGNUP_SUCCESS, payload: res.data.couple });
	});
};

export const logOutUser = () => dispatch => { 
	localStorage.setItem("token", "couple");
	localStorage.removeItem("token","couple");
	window.localStorage.clear();
	return dispatch({ type: LOG_OUT });
	
};

export const toggleAuthModal = () => dispatch => {
	dispatch({ type: TOGGLE_AUTH_MODAL });
};
