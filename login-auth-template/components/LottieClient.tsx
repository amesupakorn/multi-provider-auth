"use client"

import dynamic from "next/dynamic"

export const LottieClient = dynamic(() => import("lottie-react"), {
  ssr: false,
})