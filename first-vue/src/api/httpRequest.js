// 进行axios二次封装，使用请求与响应拦截器
import axios from 'axios'
import { message } from 'ant-design-vue';

 
// 1、创建axios实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
 
// 2、添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
// 3、添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    let msg = '';
    let status = error.response.status;
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    switch (status) {
        case 401:
            msg = "TOKEN过期";
            break;
        case 403:
            msg = "无权访问";
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器异常";
            break;
        default:
            msg = "网络异常"
 
    }
    // 错误提示
    message.error(msg);
    return Promise.reject(error);
});
 
// 对外暴露axios
export default instance;