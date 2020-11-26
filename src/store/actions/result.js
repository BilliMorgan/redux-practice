import * as actionTypes from './actionsTypes'


export const saveResult = (res) => {
  
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch) => {
    // const oldCounter = getState().ctr.counter
    // console.log(oldCounter)
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
