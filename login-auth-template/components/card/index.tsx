"use client"

import { PropsWithChildren } from "react"

export const Card = ({ children }: PropsWithChildren) => {
  return <main className="bg-white w-[28rem] h-[36rem] rounded-2xl shadow-2xl overflow-hidden">
        {children}
        </main>
}