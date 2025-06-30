"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
}

export function CountUp({ end, start = 0, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const startTime = Date.now()
      const endValue = end

      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime
        const progress = Math.min(timePassed / (duration * 1000), 1)

        const currentCount = start + progress * (endValue - start)
        countRef.current = currentCount
        setCount(currentCount)

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, start, duration])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}
