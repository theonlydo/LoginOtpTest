import axios from "axios"
import _ from "lodash"
import { Platform } from "react-native"

interface Payload {
  headers?: any
  params?: any
  body?: any
}
interface RequestConfig {
  method: any
  url: any
  headers?: any
  data?: any
}

export const apiInstance = axios.create({
  timeout: 45000,
  validateStatus: status => status >= 200 && status <= 500,
})

class ApiRequest {
  static get(route: string) {
    return payload => this.request("GET", route, payload)
  }

  static put(route) {
    return payload => this.request("PUT", route, payload)
  }

  static post(route) {
    return payload => this.request("POST", route, payload)
  }

  static delete(route) {
    return payload => this.request("DELETE", route, payload)
  }

  /**
   * handle url params, input object, return string
   * @param {object} params
   */
  static resolveParams(params: any) {
    const paramsResult = []
    Object.keys(params).map((e: any) => paramsResult.push(`${e}=${params[e]}`))
    return `?${paramsResult.join("&")}`
  }

  /**
   * resolve response
   * @param {object} res
   * @param {string} url
   */
  static async resolveResponse(res) {
   
  }

  static resolveError() {}

  /**
   * handle API request
   * @param {string} method
   * @param {string} route
   * @param {object} payload
   */
  static async request(method: string, route: string, payload: Payload) {
    const accessToken =  ""

    if (payload.params) {
      const path = this.resolveParams(payload.params)
      route = route + path
    }

    // setup base headers
    const baseHeaders = {
      Platform: Platform.OS,
      Timestamp: `${Date.now()}`,
      Authorization: `Bearer ${accessToken}`,
    }

    const requestConfig: RequestConfig = {
      url: route,
      method,
      headers: payload.headers ? { ...baseHeaders, ...payload.headers } : baseHeaders,
    }

    if (payload.body && !_.isEmpty(payload.body)) {
      const formData = new FormData()

      for (const key in payload.body) {
        formData.append(key, payload.body[key])
      }
      requestConfig.data = formData
    }

    try {

      console.log(`REQ-${requestConfig.method}-${requestConfig.url}`, requestConfig)

      const res = await apiInstance.request(requestConfig)

      console.log(`RESP-${requestConfig.method}-${requestConfig.url}`, "\n response", res)

      // await this.resolveResponse(res.data);
      return Promise.resolve(res.data)
    } catch (err: any) {
      const error = err.response ? err.response : err

      console.log(`RESPERR-${requestConfig.method}-${requestConfig.url}`, "\n err", error)
      this.resolveResponse(error.data)
      return Promise.reject(error.data)
    }
  }
}

export default ApiRequest
