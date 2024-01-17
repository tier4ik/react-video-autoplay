import { useEffect } from "react"

function useVideoAutoplay(videorefs) {
    useEffect(() => {
        const cb = entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.play()
            } else {
              entry.target.pause()
            }
          })
        }
        const observer = new IntersectionObserver(cb, {rootMargin: "-55% 0px -45% 0px"});
        videorefs.forEach(videoRef => observer.observe(videoRef.current));
    
        return () => {
          videorefs.forEach(videoRef => observer.unobserve(videoRef.current));
        }
      }, [])
}

export default useVideoAutoplay;