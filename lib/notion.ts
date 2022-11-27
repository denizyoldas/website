import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN
})

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}
