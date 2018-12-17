import { sessionLogin, sessionLoginSuccess, sessionLoginFailure } from './App.actions'

const url = process.env.REACT_APP_API_URL

export function fetchSessionLogin() {
  return (dispatch) => {
    dispatch(sessionLogin())
    return fetch(url + '/api/sessionLogin')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.message === 'not logged in') {
        dispatch(sessionLoginFailure(data.message))
      } else {
        dispatch(sessionLoginSuccess())
      }
    })
    .catch(err => {
      dispatch(sessionLoginFailure(err))
    })
  }
}
