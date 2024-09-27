import { useRef } from "react"

const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);

    const debounce = (...args) => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }

    return debounce;

}

export default useDebounce