"use client"
import { useEffect } from "react"

export default function TiltHover() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.glass'))
    const getTarget = (ev) => {
      if (ev.target && ev.target.closest) {
        const direct = ev.target.closest('.glass')
        if (direct) return direct
      }
      const x = ev.clientX
      const y = ev.clientY
      let best = null
      let bestD = Infinity
      for (const el of els) {
        const r = el.getBoundingClientRect()
        const cx = Math.max(r.left, Math.min(x, r.right))
        const cy = Math.max(r.top, Math.min(y, r.bottom))
        const d = Math.hypot(x - cx, y - cy)
        if (d < bestD) {
          bestD = d
          best = el
        }
      }
      return bestD <= 120 ? best : null
    }
    let ticking = false
    let lastEv = null
    const update = () => {
      ticking = false
      const e = lastEv
      const t = getTarget(e)
      if (!t) return
      const r = t.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / (r.width / 2)
      const dy = (e.clientY - cy) / (r.height / 2)
      const maxTilt = 10
      const ry = dx * maxTilt
      const rx = -dy * maxTilt
      const maxShift = 10
      const tx = (dx * maxShift)
      const ty = (dy * maxShift)
      t.style.setProperty("--tilt-rx", rx.toFixed(2) + "deg")
      t.style.setProperty("--tilt-ry", ry.toFixed(2) + "deg")
      t.style.setProperty("--tilt-tx", tx.toFixed(2) + "px")
      t.style.setProperty("--tilt-ty", ty.toFixed(2) + "px")
      t.setAttribute("data-tilt", "1")
    }
    const onMove = (e) => {
      lastEv = e
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    const onEnter = (e) => {
      const t = getTarget(e)
      if (t) t.setAttribute("data-tilt", "1")
    }
    const onLeave = (e) => {
      const t = getTarget(e)
      if (!t) return
      t.removeAttribute("data-tilt")
      t.style.removeProperty("--tilt-rx")
      t.style.removeProperty("--tilt-ry")
      t.style.removeProperty("--tilt-tx")
      t.style.removeProperty("--tilt-ty")
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerenter", onEnter, true)
    document.addEventListener("pointerleave", onLeave, true)
    return () => {
      document.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerenter", onEnter, true)
      document.removeEventListener("pointerleave", onLeave, true)
    }
  }, [])
  return null
}
