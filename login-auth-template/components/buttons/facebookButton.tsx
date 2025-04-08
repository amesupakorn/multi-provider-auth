"use client"

import { signIn } from "next-auth/react"
import { BsFacebook } from "react-icons/bs"

export const FacebookButton = () => {
  return (
    <button
      onClick={() => signIn("facebook")}
      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      <BsFacebook className="h-5 w-5" />
      Sign in with Facebook
    </button>
  )
}