import axios from 'axios';
import { Message } from 'iview';

function handleRequestSuccess(successReq) {
  return successReq;
}

function isNotLogin(code) {
  return code === -1;
}

function handleRequestError(errorReq) {
  return Promise.reject(errorReq);
}

function handleResponseSuccess(successRes) {
  if (successRes.config.skip) {
    return successRes;
  }
  console.log(successRes)
  const { data } = successRes;
  if (data && data.success) {
    return data.data;
  } else {
    Message.error({
      content: data.errorMsg,
      duration: 3,
    })
    if (isNotLogin(data.code)) {
      window.location.replace('#/login')
    }
    throw new Error(data.errorMsg || '未知错误！');
  }
}

function handleResponseError(errorRes) {
  const { status } = errorRes.response;

  if (/^5\d\d/.test(status)) {
    Message.error({
      content: '服务器挂了',
      duration: 3,
    })
  }
  if (/404/.test(errorRes.status)) {
    Message.error({
      content: '接口未找到',
      duration: 3,
    })
  }

  return Promise.reject(errorRes);
}

axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
axios.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default axios;