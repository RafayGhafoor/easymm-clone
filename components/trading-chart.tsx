"use client"

import { useEffect, useRef } from "react"

export function TradingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Generate random price data
    const generatePriceData = (length: number, volatility: number) => {
      const data = []
      let price = 10000 + Math.random() * 5000

      for (let i = 0; i < length; i++) {
        price += (Math.random() - 0.5) * volatility
        if (price < 5000) price = 5000
        data.push(price)
      }

      return data
    }

    // Generate bid/ask data
    const priceData = generatePriceData(100, 200)
    const bidData = priceData.map((price) => price - 10 - Math.random() * 20)
    const askData = priceData.map((price) => price + 10 + Math.random() * 20)

    // Animation variables
    let currentIndex = 0
    const maxIndex = priceData.length
    const animationSpeed = 1

    // Draw function
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background
      ctx.fillStyle = "#0f172a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid lines
      ctx.strokeStyle = "rgba(100, 116, 139, 0.2)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      const numHorizontalLines = 5
      for (let i = 0; i <= numHorizontalLines; i++) {
        const y = (i / numHorizontalLines) * canvas.height
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      const numVerticalLines = 10
      for (let i = 0; i <= numVerticalLines; i++) {
        const x = (i / numVerticalLines) * canvas.width
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Determine visible data range
      const visibleDataPoints = Math.min(currentIndex + 1, maxIndex)
      const visibleData = priceData.slice(0, visibleDataPoints)
      const visibleBids = bidData.slice(0, visibleDataPoints)
      const visibleAsks = askData.slice(0, visibleDataPoints)

      // Find min/max for scaling
      const allValues = [...visibleData, ...visibleBids, ...visibleAsks]
      const minPrice = Math.min(...allValues) * 0.99
      const maxPrice = Math.max(...allValues) * 1.01
      const priceRange = maxPrice - minPrice

      // Draw price line
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let i = 0; i < visibleDataPoints; i++) {
        const x = (i / (maxIndex - 1)) * canvas.width
        const y = canvas.height - ((visibleData[i] - minPrice) / priceRange) * canvas.height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw bid line
      ctx.strokeStyle = "#10b981"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let i = 0; i < visibleDataPoints; i++) {
        const x = (i / (maxIndex - 1)) * canvas.width
        const y = canvas.height - ((visibleBids[i] - minPrice) / priceRange) * canvas.height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw ask line
      ctx.strokeStyle = "#ef4444"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let i = 0; i < visibleDataPoints; i++) {
        const x = (i / (maxIndex - 1)) * canvas.width
        const y = canvas.height - ((visibleAsks[i] - minPrice) / priceRange) * canvas.height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw spread area
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
      ctx.beginPath()

      for (let i = 0; i < visibleDataPoints; i++) {
        const x = (i / (maxIndex - 1)) * canvas.width
        const askY = canvas.height - ((visibleAsks[i] - minPrice) / priceRange) * canvas.height

        if (i === 0) {
          ctx.moveTo(x, askY)
        } else {
          ctx.lineTo(x, askY)
        }
      }

      for (let i = visibleDataPoints - 1; i >= 0; i--) {
        const x = (i / (maxIndex - 1)) * canvas.width
        const bidY = canvas.height - ((visibleBids[i] - minPrice) / priceRange) * canvas.height

        ctx.lineTo(x, bidY)
      }

      ctx.closePath()
      ctx.fill()

      // Draw current price
      if (visibleDataPoints > 0) {
        const lastPrice = visibleData[visibleDataPoints - 1]
        const lastX = ((visibleDataPoints - 1) / (maxIndex - 1)) * canvas.width
        const lastY = canvas.height - ((lastPrice - minPrice) / priceRange) * canvas.height

        // Price marker
        ctx.fillStyle = "#3b82f6"
        ctx.beginPath()
        ctx.arc(lastX, lastY, 5, 0, Math.PI * 2)
        ctx.fill()

        // Price label
        ctx.fillStyle = "rgba(15, 23, 42, 0.8)"
        ctx.fillRect(lastX + 10, lastY - 15, 80, 30)
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        ctx.fillText(`$${lastPrice.toFixed(2)}`, lastX + 15, lastY + 5)
      }

      // Increment animation counter
      currentIndex = Math.min(currentIndex + animationSpeed, maxIndex)

      // If we've reached the end, reset
      if (currentIndex >= maxIndex - 1) {
        currentIndex = 0
      }

      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full bg-slate-900" />
}
