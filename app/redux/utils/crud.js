import axios from 'axios';
import {getData} from '../../utils/Storage';

const baseUrl = 'http://localhost:5000';

const crud = request => async dispatch => {
  const idToken = await getData('auth');
  console.log('tokem', idToken);
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

  axios(options)
    .then(res => {
      dispatch({
        type: request.dispatch.end,
        payload: res,
      });
      if (request.push) {
        // TODO(anesu): figure out push actions
      }
    })
    .catch(err => {
      dispatch({
        type: request.dispatch.fail,
        payload: err,
      });
    });
};

export default crud;
