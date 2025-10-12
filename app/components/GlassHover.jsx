"use client"
import { useEffect } from "react"

export default function GlassHover() {
  useEffect(() => {
    const getTarget = (ev) => ev.target && ev.target.closest && ev.target.closest(".glass")
    let ticking = false
    let lastEv = null
    const update = () => {
      ticking = false
      const e = lastEv
      const t = getTarget(e)
      if (!t) return
      const r = t.getBoundingClientRect()
      const lx = e.clientX - r.left
      const ly = e.clientY - r.top
      const px = lx / r.width
      const py = ly / r.height
      const x = px * 100
      const y = py * 100

      const cx = 0.5
      const cy = 0.5
      const dx = px - cx
      const dy = py - cy
      const dist = Math.hypot(dx, dy)
      const clamped = Math.min(1, Math.max(0, dist))
      const smooth = (v) => v * v * (3 - 2 * v)
      const intensity = 1 - smooth(Math.min(1, (clamped - 0.05) / 0.65))

      const angRad = Math.atan2(dy, dx)
      const angDeg = (angRad * 180) / Math.PI

      const base = Math.min(r.width, r.height)
      const dl = lx
      const dr = r.width - lx
      const dt = ly
      const db = r.height - ly
      const m = Math.min(dl, dr, dt, db)
      const fres = 1 - smooth(Math.min(1, m / (base * 0.5)))
      const opStreak = 0.35 + 0.45 * fres
      const streakLen = Math.max(30, Math.min(80, Math.round(base * 0.12)))
      const streakThick = Math.max(1, Math.min(3, Math.round(base * 0.008)))

      t.style.setProperty("--mx", x + "%")
      t.style.setProperty("--my", y + "%")
      t.style.setProperty("--ang", angDeg.toFixed(2) + "deg")
      const angPerp = (angDeg + 90 + 360) % 360
      t.style.setProperty("--angp", angPerp.toFixed(2) + "deg")
      t.style.setProperty("--op-streak", opStreak.toFixed(3))
      t.style.setProperty("--streak-len", streakLen + "px")
      t.style.setProperty("--streak-thick", streakThick + "px")
      t.style.setProperty("--mxp", Math.round(lx) + "px")
      t.style.setProperty("--myp", Math.round(ly) + "px")
      t.setAttribute("data-glow", "1")
    }
    const onPointerMove = (e) => {
      lastEv = e
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    const onPointerEnter = (e) => {
      const t = getTarget(e)
      if (t) t.setAttribute("data-glow", "1")
    }
    const onPointerLeave = (e) => {
      const t = getTarget(e)
      if (!t) return
      t.removeAttribute("data-glow")
      t.style.removeProperty("--mx")
      t.style.removeProperty("--my")
      t.style.removeProperty("--ang")
      t.style.removeProperty("--angp")
      t.style.removeProperty("--op-streak")
      t.style.removeProperty("--streak-len")
      t.style.removeProperty("--streak-thick")
      t.style.removeProperty("--mxp")
      t.style.removeProperty("--myp")
    }
    document.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerenter", onPointerEnter, true)
    document.addEventListener("pointerleave", onPointerLeave, true)
    return () => {
      document.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerenter", onPointerEnter, true)
      document.removeEventListener("pointerleave", onPointerLeave, true)
    }
  }, [])
  return null
}
