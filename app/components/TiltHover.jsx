"use client"
import { useEffect } from "react"

export default function TiltHover() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.glass'))
    let activeEl = null
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
      if (!t) {
        if (activeEl) {
          activeEl.removeAttribute('data-tilt')
          activeEl.style.removeProperty('--tilt-rx')
          activeEl.style.removeProperty('--tilt-ry')
          activeEl.style.removeProperty('--tilt-tx')
          activeEl.style.removeProperty('--tilt-ty')
          activeEl = null
        }
        return
      }

      if (activeEl && activeEl !== t) {
        activeEl.removeAttribute('data-tilt')
        activeEl.style.removeProperty('--tilt-rx')
        activeEl.style.removeProperty('--tilt-ry')
        activeEl.style.removeProperty('--tilt-tx')
        activeEl.style.removeProperty('--tilt-ty')
      }

      activeEl = t
      const r = t.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / (r.width / 2)
      const dy = (e.clientY - cy) / (r.height / 2)
      const base = Math.min(r.width, r.height)
      const maxTilt = 2.5
      const ry = dx * maxTilt
      const rx = -dy * maxTilt
      const maxShift = Math.max(8, Math.round(base * 0.06))
      let tx = dx * maxShift
      let ty = dy * maxShift

      const outX = Math.max(r.left - e.clientX, 0, e.clientX - r.right)
      const outY = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom)
      const dist = Math.hypot(outX, outY)
      const threshold = 140
      const w = Math.max(0, 1 - dist / threshold)
      if (w <= 0) {
        t.removeAttribute('data-tilt')
        t.style.removeProperty('--tilt-rx')
        t.style.removeProperty('--tilt-ry')
        t.style.removeProperty('--tilt-tx')
        t.style.removeProperty('--tilt-ty')
        activeEl = null
        return
      }

      const rxW = rx * w
      const ryW = ry * w
      tx *= w
      ty *= w
      const mag = Math.min(1, Math.hypot(dx, dy))
      const scale = 1 + (0.015 + 0.055 * mag) * w
      const ox = ((dx * 50) + 50).toFixed(2) + "%"
      const oy = ((dy * 50) + 50).toFixed(2) + "%"
      t.style.setProperty("--tilt-rx", rxW.toFixed(2) + "deg")
      t.style.setProperty("--tilt-ry", ryW.toFixed(2) + "deg")
      t.style.setProperty("--tilt-tx", tx.toFixed(2) + "px")
      t.style.setProperty("--tilt-ty", ty.toFixed(2) + "px")
      t.style.setProperty("--tilt-scale", scale.toFixed(3))
      t.style.setProperty("--ox", ox)
      t.style.setProperty("--oy", oy)
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
      if (t) {
        activeEl = t
        t.setAttribute('data-tilt', '1')
      }
    }
    const onLeave = (e) => {
      const t = getTarget(e)
      const el = t || activeEl
      if (!el) return
      el.removeAttribute('data-tilt')
      el.style.removeProperty('--tilt-rx')
      el.style.removeProperty('--tilt-ry')
      el.style.removeProperty('--tilt-tx')
      el.style.removeProperty('--tilt-ty')
      if (el === activeEl) activeEl = null
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
