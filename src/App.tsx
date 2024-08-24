import { useState } from 'react'
import { Post } from './common/types/Post'
import getFakePosts from './post'
import InfiniteScroll from './components/InfiniteScroll'
import PostCard from './components/PostCard'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [hasMore, setHasMore] = useState(true)

  const fetchMorePosts = async () => {
    const data = await getFakePosts(8)
    setPosts(prev => [...prev, ...data.posts])
    if(posts.length + data.posts.length >= 200) setHasMore(false)
  }

  return (
    <div className="container">
      <div className="post">
        <h1 className="title">POSTS</h1>
        <InfiniteScroll
          next={fetchMorePosts}
          hasMore={hasMore}
          loadingComponent={<div className="bt-state">Loading...</div>}
          endMessage={<div className="bt-state">You have reached the end.</div>}
        >
          <div className="post-list">
            {posts.map(item => <PostCard key={item.id} post={item}/>)}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default App
