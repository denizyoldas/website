import { getTree } from '@/lib/content'
import Terminal from './terminal'

export default function Home() {
  return <Terminal tree={getTree()} />
}
