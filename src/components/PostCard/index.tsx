import { Post } from "../../common/types/Post"
import styles from './postcard.module.css'

type PostCardPropsType = {
    post: Post
}

const PostCard = ({post} : PostCardPropsType) => {

    return (
        <div className={styles.post_card}>
            <img src={post.image} alt={post.title} className={styles.post_image}/>
            <div className={styles.post_title}>{post.title}</div>
            <div className={styles.post_createdAt}>Created at: {post.createdAt}</div>
        </div>
    )
}

export default PostCard