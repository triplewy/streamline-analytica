import { SESSION_LOGIN, SESSION_LOGIN_SUCCESS, SESSION_LOGIN_FAILURE } from './App.actions'

const initialState = {
  loggedIn: false,
  loading: false,
  error: '',
}

export function App(state = initialState, action) {
  switch (action.type) {
    case SESSION_LOGIN:
      return {
        ...state,
        loading: true
      }
    case SESSION_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        error: '',
      }
    case SESSION_LOGIN_FAILURE:
      return {
        loggedIn: false,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
