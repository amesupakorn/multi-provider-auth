"use client"

import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa6"

export const GithubButton = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
    >
      <FaGithub className="h-5 w-5" />
      Sign in with GitHub
    </button>
  )
}