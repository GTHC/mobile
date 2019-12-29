import axios from 'axios';
import { getData } from '../../utils/Storage';

const baseUrl = 'https://staging.gthc.io';

const crud = request => async dispatch => {
  const idToken = await getData('auth');
  dispatch({
    type: request.dispatch.begin,
  });
  const options = {
    method: request.method,
    url: `${baseUrl}${request.url}?token=${idToken}&mobile=true`,
    data: request.data ? request.data : null,
  };

  // added options
  if (request.headers) {
    options.headers = request.headers;
  }

  console.log('url', options.url);

  axios(options)
    .then(res => {
      dispatch({
        type: request.dispatch.end,
        payload: res,
      });
    })
    .catch(err => {
      dispatch({
        type: request.dispatch.fail,
        payload: err,
      });
    });
};

export default crud;
