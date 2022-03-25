//文档地址：http://www.axios-js.com/zh-cn/docs/
import axios, { AxiosRequestConfig } from 'axios'

interface MethodType {
    (url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<any>
}
interface HttpType<T> {
    get: T
    post: T
    put: T
    delete: T
    ex: T
}

// 创建axios实列
const axiosConfig: AxiosRequestConfig = {
    baseURL: 'https://mock.mengxuegu.com/mock/6178250f722e444f8c701af6/api',
    timeout: 1 * 60 * 1000,
    withCredentials: true,
    cancelRepeatRequest: false // 是否取消重复请求
}
const instance = axios.create(axiosConfig)
const AUTH_TOKEN = sessionStorage.getItem('token') || ''
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 请求拦截
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 响应拦截
instance.interceptors.response.use(
    (res) => {
        return res.data ? res.data : res
    },
    (err) => {
        // 非手动取消
        // if (!axios.isCancel(err)) {
        // }
        // removeRequestList(err.response ? err.response.config.url : undefined, err)
        return Promise.reject(err)
    }
)

const $http: HttpType<MethodType> = {
    get(url, params = {}, config) {
        params = config ? { params: params, ...config } : { params: params }
        return instance
            .get(url, params)
            .then((res) => {
                return res
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },
    post(url, params = {}, config) {
        return instance
            .post(url, params, config)
            .then((res) => {
                return res
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },
    put(url, params = {}, config) {
        return instance
            .put(url, params, config)
            .then((res) => {
                return res
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },
    delete(url, params = {}, config) {
        params = config ? { data: params, ...config } : { data: params }
        return instance
            .delete(url, params)
            .then((res) => {
                return res
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },
    ex(url) {
        return Promise.resolve(url)
    }
}

export default $http
