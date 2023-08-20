import { type Methods } from 'utils/constants'

export class Service {
  protected readonly BASE_URL: string
  constructor (baseUrl: string) {
    this.BASE_URL = baseUrl
  }

  protected async request (path: string, method: Methods) {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await this.checkResponse(res)
  }

  protected async requestWithBody (path: string, method: Methods, data: any) {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await this.checkResponse(res)
  }

  private async checkResponse (res: Response) {
    return res.ok
      ? await res.json()
      : await Promise.reject(`Ошибка: ${res.status}`)
  }
}
