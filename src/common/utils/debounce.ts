function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>
  
    return function (...args: Parameters<T>): void {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), wait)
    }
}

export default debounce