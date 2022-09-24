import { addCastomersAction } from './../store/castomerReduser';

export const addCastomers= () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCastomersAction(json)))
  }
};
