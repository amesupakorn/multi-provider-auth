"use client"

import { useSession, signOut } from "next-auth/react"
import Lottie from "lottie-react"
import { BsFillCheckCircleFill } from "react-icons/bs"
import confetti from "@/public/lotties/confetti.json"

export const SignedIn = () => {
  const { data: session } = useSession()

  return (
    <div className="relative flex items-center justify-center min-w-full h-full">
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-4 text-center">
        <BsFillCheckCircleFill className="w-[30px] h-[30px] text-green-500" />
        <p className="text-[1.3rem] font-semibold leading-8">
          You&apos;re signed in<br />
          as {session?.user?.name}
        </p>
      </div>

      {/* Sign out button */}
      <button
        onClick={() => signOut()}
        className="absolute bottom-12 z-20 px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition"
      >
        Sign out
      </button>

      {/* Lottie background */}
      <div className="absolute inset-0 z-10 w-full">
        <Lottie animationData={confetti} loop={false} />
      </div>
    </div>
  )
}