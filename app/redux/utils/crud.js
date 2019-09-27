import axios from 'axios';

const crud = request => dispatch => {
  dispatch({
    type: request.dispatch.begin,
  });
  const options = {
    method: request.method,
    url: request.url,
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
