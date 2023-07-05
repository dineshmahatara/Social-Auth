import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
export default function Component() {
  const { data: session } = useSession()
  const handleGoogleSignIn = () => {
    signIn('google',{callbackUrl:"http://localhost:3000/components/profile"})
  };

  const handleGitHubSignIn = () => {
    signIn('github',{callbackUrl:"http://localhost:3000/components/profile"})
  };
  const handleFaceBookSignIn = () => {
    signIn("facebook");
  };
  const handleSignOut = () => {
    signOut();
  };
  if (session) {
    return (
      <> Hello {session.user.name}
        your Email is {session.user.email} <br />
        
      <img src={session.user.image} style={{borderRadius:'50px'}}/>
        <button onClick={() => handleSignOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />

      <button onClick={handleGoogleSignIn}>Sign in with Google</button> <br/>
      <button onClick={handleGitHubSignIn}>Sign in with GitHub</button> <br/>
      <button onClick={handleFaceBookSignIn}>Sign in with Facebook</button>
    </>
  )
}