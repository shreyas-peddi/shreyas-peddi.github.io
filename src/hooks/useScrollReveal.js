import { useInView } from 'react-intersection-observer'

export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  })

  return { ref, inView }
}
