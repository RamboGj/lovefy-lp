'use client'
/* eslint-disable */
import { ReactLenis } from '@studio-freight/react-lenis'
function SmoothScrolling({ children }: { children: any }) {
  return (
    // @ts-ignore: Ignore the JSX component type error for ReactLenis
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling
