import axios from "axios";
import qs from 'qs'

const defaultClient = {
  client: axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    maxContentLength: 20000,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json'
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'brackets', encode: false })
    }
  }),
  options: {
    interceptors: {
      request: [
        (_, req) => {
          if (req.videos) {
            req.params = {
              ...req.params,
              api_key: '65e23bea415face0ab07121193ad9938',
              append_to_response: 'videos'
            }
            req.url = 'https://api.themoviedb.org/3/' + req.url
            return req
          }
          else {
            req.params = {
              ...req.params,
              api_key: '65e23bea415face0ab07121193ad9938'
            }
            req.url = 'https://api.themoviedb.org/3/' + req.url
            return req
          }
        }
      ],
      response: []
    }
  }
}

export default defaultClient