import PipeState from './pipesState'

import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
import { message } from 'antd'



const API_PREFIX = '/api/v1'

function initAxios() {
    // Init Prefix
    // axios.defaults.baseURL = API_PREFIX
    // Disable Cache For IE

    // Init Error Handling Interceptor
    axios.interceptors.response.use(function(response) {
            return response.data
    }, function(error) {
        let err = new Error()
        let errorRes = error.response
        if (!errorRes) {
            err.message = '未知错误'
            return err
        }
        let status = errorRes.status
        if (status === 401) {
            err.message = 'Unauthorized'
                // Redirect
            window.location.href = '/login'
        } else if (status === 404) {
            err.message = '404 请求失败'
        } else {
            err.message = errorRes.data.error || errorRes.data.message || errorRes.statusText || '未知错误'
        }
        let msg = error.response.data.code ? `${error.response.data.code} ${err.message}` : err.message
        message.error(msg, 5)

        return Promise.reject(err)
    })
}


export default {
    pipeState: new PipeState(),
    initAxios: initAxios
}