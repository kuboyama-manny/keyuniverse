export default function (axios) {
  const self = {};
  const headers = {
    'Content-Type': 'application/json',
  };

  const setHeader = (token) => {
    if (token) {
      return Object.assign({}, headers, { 'X-CSRF-TOKEN': token });
    }
    return Object.assign({}, headers);
  };

  self.request = params => {
    return axios({
      method: params.method,
      withCredentials: true,
      headers: setHeader(params.token),
      params: params.queryParams,
      url: params.route,
      data: params.body
    });
  };

  self.upload = params => {
    return axios({
      method: params.method,
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRF-TOKEN': params.token
      },
      url: params.route,
      data: params.body,
      onUploadProgress: progressEvent => params.dispatch(params.getProgress(Math.round( (progressEvent.loaded * 100) / progressEvent.total ), params.filename))
    })
  };

  self.get = params => self.request(Object.assign({method: 'GET'}, params));

  return self;
}
