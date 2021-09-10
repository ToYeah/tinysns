import { AxiosResponse } from 'axios'
export default class Tweet {
  id: number
  date: Date
  body: string
  name: string
  userId: number
  constructor(
    id: string,
    date: string,
    body: string,
    name: string,
    userId: string
  ) {
    this.id = Number(id)
    this.body = body
    this.date = new Date(date)
    this.name = name
    this.userId = Number(userId)
  }
}

export const parseTweet = (postRes: AxiosResponse): Tweet[] => {
  const res: Tweet[] = postRes.data.map(
    (x: {
      id: string
      timestamp: string
      body: string
      name: string
      // eslint-disable-next-line camelcase
      user_id: string
    }) => {
      return new Tweet(x.id, x.timestamp, x.body, x.name, x.user_id)
    }
  )
  return res
}
