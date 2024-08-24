import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react"

type InfiniteScrollPropsType = {
    children ?: React.ReactNode
    endMessage ?: React.ReactNode
    loadingComponent ?: ReactNode
    next ?: () => Promise<void> |void
    hasMore ?: boolean
}

const InfiniteScroll = ({
    children,
    next,
    endMessage,
    loadingComponent,
    hasMore = false,
} : InfiniteScrollPropsType) => {

    const observerRef = useRef<IntersectionObserver | null>(null)
    const triggerRef = useRef<HTMLDivElement | null>(null)
    const [loading, setLoading] = useState(false)

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0]
            if (target.isIntersecting && hasMore && next && !loading) {
                setLoading(true)
                Promise.resolve(next()).finally(() => setLoading(false))
            }
        },[hasMore, next, loading])

        useEffect(() => {
            observerRef.current = new IntersectionObserver(handleObserver, {
                root: null, 
                rootMargin: "0px",
                threshold: 0.1,
            })
        
            if (triggerRef.current) observerRef.current.observe(triggerRef.current)
        
            return () => {
                if (observerRef.current && triggerRef.current) observerRef.current.unobserve(triggerRef.current)
            }

        }, [handleObserver])

    return (
        <>
            {children}
            {hasMore && <div ref={triggerRef} />}
            {loading && loadingComponent}
            {!hasMore && endMessage}
        </>
    )
}

export default InfiniteScroll