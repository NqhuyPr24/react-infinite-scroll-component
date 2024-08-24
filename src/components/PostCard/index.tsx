import { Post } from "../../common/types/Post"

type PostCardPropsType = {
    post: Post
}

const PostCard = ({post} : PostCardPropsType) => {

    return (
        <div className="post-card">
            <img src={post.image} alt={post.title} className="post-image"/>
            <div className="post-title">{post.title}</div>
            <div className="post-created-at">Created at: {post.createdAt}</div>
        </div>
    )
}

export default PostCard