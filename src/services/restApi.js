
import axios from "axios";
import { AppConstants } from "../constants";

export const GET = async (url, params, baseUrl) => {
    const data = await makeCall('get', url, params, baseUrl)
    return data;
}

// TODO : Improve for error handeling and other method types 

export const POST = (baseUrl, url, param = {}, body = {}) => { }

export const PUT = (baseUrl, url, param = {}, body = {}) => { }


export const DELETE = (baseUrl, url, param = {}, body = {}) => { }

const errorHandeler = () => { }

const validation = () => { }

const parseUrlParams = (params) => {
    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return `?${queryString}`
}

const makeCall = async (...data) => {
    
    const [method, url, params = null, baseUrl = AppConstants.api, body = null] = data;
    const fullUrl = `${baseUrl}${url}${params ? parseUrlParams(params) : ''}`;
    try {
        const responce = await axios.get(fullUrl)
        return responce;
    } catch (e) {
        console.error(e)
        return null;
    }


}

export default GET;