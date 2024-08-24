function throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout>
    let lastRan: number
  
    return function (...args: Parameters<T>): void {
        if (!lastRan) {
            func(...args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

export default throttle