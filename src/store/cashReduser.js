const defaultState = {
  cash: 0,
}

const PUT_CASH = 'PUT_CASH';
const GET_CASH = 'GET_CASH';

export const cashReduser = (state = defaultState, action) => {
  switch (action.type) {
    case PUT_CASH:
      return { ...state, cash: state.cash + action.payload }
    
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload }

    default:
      return state;
  }
};

export const putCashAction = (payload) => ({ type: PUT_CASH, payload });
export const getCashAction = (payload) => ({ type: GET_CASH, payload });
