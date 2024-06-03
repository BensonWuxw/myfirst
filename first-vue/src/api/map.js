import request from "./httpRequest.js"

export const getFeaturesList = () => {
    return request({
        url: './data.json',
        method: 'get'
    })
}