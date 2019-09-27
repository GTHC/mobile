// @flow

import { push as pushRedux } from 'react-router-redux';

const push = (route: any) => (dispatch: any) => {
  dispatch(pushRedux(route));
};

export { push };
