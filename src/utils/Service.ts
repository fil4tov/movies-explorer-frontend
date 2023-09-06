import { type Methods } from 'utils/constants'

type ServiceParams = {
  baseUrl: string
  credentials: RequestInit['credentials']
}

export class Service {
  protected readonly BASE_URL: ServiceParams['baseUrl']
  protected readonly credentials: ServiceParams['credentials']
  constructor ({ baseUrl, credentials }: ServiceParams) {
    this.BASE_URL = baseUrl
    this.credentials = credentials
  }

  protected async request <T>(path: string, method: Methods): Promise<T> {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method,
      credentials: this.credentials,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await this.checkResponse(res)
  }

  protected async requestWithBody <T>(
    path: string, method: Methods, data: Record<string, unknown>
  ): Promise<T> {
    const res = await fetch(`${this.BASE_URL}/${path}`, {
      method,
      credentials: this.credentials,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await this.checkResponse(res)
  }

  private async checkResponse <T>(res: Response): Promise<T> {
    if (res.ok) {
      return await res.json()
    }
    if (res.status === 400) {
      return await Promise.reject('Ошибка валидации')
    }
    const data = await res.json()
    return await Promise.reject(data.message)
  }
}
