import { AxiosResponse } from 'axios'
export default class Tweet {
  id: number
  date: Date
  body: string
  name: string
  constructor(id: string, date: string, body: string, name: string) {
    this.id = Number(id)
    this.body = body
    this.date = new Date(date)
    this.name = name
  }
}

export const parseTweet = (postRes: AxiosResponse): Tweet[] => {
  const res: Tweet[] = postRes.data.map(
    (x: { id: string; date: string; body: string; name: string }) => {
      return new Tweet(x.id, x.date, x.body, x.name)
    }
  )
  return res
}
