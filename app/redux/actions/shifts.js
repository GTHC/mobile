// @flow

import crud from './utils/crud';

const getAllShifts = () => crud({
  dispatch: {
    begin: 'BEGIN_GET_SHIFTS',
    end: 'END_GET_SHIFTS',
    fail: 'FAILED_GET_SHIFTS',
  },
  method: 'GET',
  url: '/api/v1/shifts',
});

const updateShift = (id, data) => crud({
  dispatch: {
    begin: 'BEGIN_PUT_SHIFT',
    end: 'END_PUT_SHIFT',
    fail: 'FAILED_PUT_SHIFT',
  },
  method: 'PUT',
  url: `/api/v1/shifts/${id}`,
  data,
});

const createShift = data => crud({
  dispatch: {
    begin: 'BEGIN_POST_SHIFT',
    end: 'END_POST_SHIFT',
    fail: 'FAILED_POST_SHIFT',
  },
  method: 'POST',
  url: '/api/v1/shifts',
  data,
});

const deleteShift = id => crud({
  dispatch: {
    begin: 'BEGIN_DELETE_SHIFT',
    end: 'END_DELETE_SHIFT',
    fail: 'FAILED_DELETE_SHIFT',
  },
  method: 'DELETE',
  url: `/api/v1/shifts/${id}`,
});

const addUserToShift = (userID, shiftID) => crud({
  dispatch: {
    begin: 'BEGIN_POST_SHIFT',
    end: 'END_POST_SHIFT',
    fail: 'FAILED_POST_SHIFT',
  },
  method: 'POST',
  url: '/api/v1/user/shifts',
  data: {
    user_id: userID,
    shift_id: shiftID,
  },
});

const dragDropUpdate = (oldShifts, newShift) => {
  // NOTE: There is both a oldShift and oldShifts variable and the same for newShift and newShifts
  const oldShift = oldShifts.find(shift => shift.id === newShift.id);
  const index = oldShifts.indexOf(oldShift);
  const newShifts = [...oldShifts];
  newShifts.splice(index, 1, newShift);
  return {
    type: 'DRAG_DROP',
    payload: newShifts,
  };
};

export { getAllShifts, updateShift, createShift, deleteShift, addUserToShift, dragDropUpdate };
