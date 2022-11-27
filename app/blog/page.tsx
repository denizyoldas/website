import Container from '@/components/container'
import PostItem from '@/components/post-item'
import { getDatabase } from '@/lib/notion'

async function fetchData() {
  const databases = await getDatabase('243c6492-4194-4ebd-9cbf-6894da4df1e7')

  const posts = databases.map((pageObj: any) => ({
    id: pageObj.id,
    title: pageObj.properties.title.title[0].plain_text,
    description: pageObj.properties.description.rich_text[0].plain_text,
    tags: pageObj.properties.tags.multi_select.map(notionTag => ({
      color: notionTag.color,
      text: notionTag.name
    })),
    url: pageObj.properties.url.rich_text[0].plain_text,
    date: new Date(pageObj.created_time).toISOString()
  }))

  return posts
}

export default async function Blog() {
  const posts = await fetchData()

  return (
    <Container>
      {posts.length && (
        <div>
          <ul>
            {posts.map((p, index) => (
              <PostItem key={p.id} {...p} isLast={index === posts.length - 1} />
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}
