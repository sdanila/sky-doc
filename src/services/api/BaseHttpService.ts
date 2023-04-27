import axios, { AxiosRequestConfig } from 'axios'
import { QueryTypes } from './data'

export interface IHttpMethodRequestSettings<SR, D> {
    url: string
    type: typeof QueryTypes[keyof typeof QueryTypes]
    data?: D
    options?: AxiosRequestConfig<D>
}

interface IHttpResponse<SR> {
    success: boolean
    data: SR
    errorMessage: string
}

export class BaseHttpService {

    constructor(public baseUrl: string) {
        axios.defaults.timeout = 30000
        axios.defaults.responseType = 'json'
        axios.defaults.validateStatus = status => (status >= 200 && status < 300)

        this.baseUrl = baseUrl
    }

    protected sendQuery = async <ServerResponse, Data extends AxiosRequestConfig<any>>({
        url,
        type,
        data,
        options,
    }: IHttpMethodRequestSettings<ServerResponse, Data>):
        Promise<IHttpResponse<ServerResponse>> => {
        let response
        switch (type) {
        case QueryTypes.POST:
            response = await axios.post(url, data, options)
            break
        case QueryTypes.DELETE:
            response = await axios.delete(url, data)
            break
        case QueryTypes.PUT:
            response = await axios.put(url, data, options)
            break
        default:
            response = await axios.get(url, data)
            break
        }

        const { data: responseData, status } = response
        const success = (status >= 200 && status <= 300)
        const resultResponse = {
            success,
            data: success && responseData,
            errorMessage: responseData.message,
            responseStatus: status,
        }
        return resultResponse
    }
}