import { FacebookButton } from "@/components/buttons/facebookButton"
import { GithubButton } from "@/components/buttons/githubButton"
import { GoogleButton } from "@/components/buttons/googlebutton"
import { Card } from "@/components/card/index"

export const SignIn = () => {
    return (
        <Card>
            <div className="flex flex-col justify-between h-full min-w-full p-12">
                <h1 className="text-4xl font-semibold max-w-[20rem] mb-6">
                Sign in with your account
                </h1>
        
                <div className="flex flex-col gap-3">
                <GithubButton />
                <GoogleButton />
                <FacebookButton />
                </div>
            </div>
        </Card>
      
    )
  }