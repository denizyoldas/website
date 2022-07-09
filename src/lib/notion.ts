import { Client } from '@notionhq/client'

export default class Notion {
  private notion: Client = null

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_ACCESS_TOKEN
    })
  }

  async getUser(): Promise<any> {
    const listUsersResponse = await this.notion.users.list({})
    return listUsersResponse
  }

  async databases(): Promise<any> {
    const response = await this.notion.databases
    return response
  }

  async page(query: any = null) {
    const response = await this.notion.pages
    return response
  }
}
