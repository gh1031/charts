import axios from 'axios';
import { Message } from 'iview';

function handleRequestSuccess(successReq) {
  console.log(successReq, 'successReq');
  return successReq;
};

function handleRequestError(errorReq) {
  console.log(errorReq, 'errorReq');
  return Promise.reject(errorRes);
};

function handleResponseSuccess(successRes) {
  console.log(successRes, 'successRes');
  if (successRes.config.skip) {
    return successRes;
  }
  const { data } = successRes;
  if (data && data.success) {
    return data.data;
  } else {
    Message.error({
      content: data.errorMsg,
      duration: 3,
    })
    throw new Error(data.errorMsg || '未知错误！');
  }
};

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
};

axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
axios.interceptors.response.use(handleResponseSuccess, handleResponseError);

export default axios;