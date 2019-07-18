import axios from 'client/utils/axios';

const prefix = (url) => `/proxy${url}`;

export const fetchMenus = (params) => axios.get(prefix('/users/menus'), { params });
export const fetchOptions = (params) => axios.get(prefix('/echart/options', { params }));