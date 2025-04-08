"use client"

import { useSession } from "next-auth/react"

import { SignedIn } from "../auth/signedIn"
import { SignIn } from "../auth/signIn"

export const CardAnimation = () => {
  const { data: session } = useSession()

  return (
    <div
      className={`
        h-full flex transition-all duration-1000
        ${session ? "-translate-x-full" : "translate-x-0"}
      `}
    >
      <SignIn />
      <SignedIn />
    </div>
  )
}