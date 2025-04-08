"use client"

import dynamic from "next/dynamic"

// import แบบ dynamic และปิด SSR
export const LottieClient = dynamic(() => import("lottie-react"), {
  ssr: false,
})