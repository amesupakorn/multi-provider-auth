"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

export const GoogleButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
    >
      <FcGoogle className="h-5 w-5" />
      Sign in with Google
    </button>
  )
}