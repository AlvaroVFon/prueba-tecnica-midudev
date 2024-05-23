import axios, { AxiosResponse } from 'axios'

interface RandomUsers {
  API_URL: string
  AxiosInstance: Function
}
class RandomUsers {
  constructor(API_URL: string) {
    this.API_URL = API_URL
    this.AxiosInstance = axios.create({
      baseURL: API_URL,
    })
  }
  async getUsers(params?: string) {
    const response: AxiosResponse = await axios
      .get(`https://randomuser.me/api?${params}`)
      .catch((err) => err.response)

    return response
  }
}

const api = new RandomUsers('https://randomuser.me/api/')
export default api
