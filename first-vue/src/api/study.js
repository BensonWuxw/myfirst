import request from "./httpRequest.js"

export const getTreeJson = () => {
    return request({
        url: './tree.json',
        method: 'get'
    })
}