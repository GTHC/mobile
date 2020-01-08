// @flow

import crud from '../utils/crud';

const getNotifications = () =>
  crud({
    dispatch: {
      begin: 'BEGIN_GET_NOTIFICATIONS',
      end: 'END_GET_NOTIFICATIONS',
      fail: 'FAILED_GET_NOTIFICATIONS',
    },
    method: 'GET',
    url: '/api/v1/notifications',
  });


export {getNotifications};
