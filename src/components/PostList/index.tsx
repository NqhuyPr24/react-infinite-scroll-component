import { useEffect, useRef } from "react"
import { Post } from "../../common/types/Post"
import PostCard from "../PostCard"
import styles from './postlist.module.css'
import Macy from "macy"

const PostList = ({posts = []}: {posts?: Post[]}) => {

    const gridRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(gridRef.current) {
            const macyInstance = Macy({
                container: gridRef.current,
                trueOrder: false,
                waitForImages: false,
                margin: {
                    x:15,
                    y:15
                },
                columns: 4,
                breakAt: {
                    992:3,
                    768:2,
                }
            })

            macyInstance.recalculate()

            return () => {
                macyInstance.remove()
            }
        }
    }, [posts])

    return (
        <div 
            ref={gridRef}
            className={styles.post_list}
        >
            {posts.map(item => <PostCard key={item.id} post={item}/>)}
        </div>
    )

}

export default PostList