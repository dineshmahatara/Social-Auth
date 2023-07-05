import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleGitHubSignIn = () => {
    signIn("github");
  };
  const handleFaceBookSignIn = () => {
    signIn("facebook");
  };

  if (session) {
    return (
      <>
        Hello {session.user.name}, your email is {session.user.email} <br />
        <img src={session.user.image} style={{ borderRadius: "50px" }} alt="User Avatar" />
        <button onClick={() => signOut()}>Sign out</button>
        
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={handleGoogleSignIn}>Sign in with Google</button> <br/>
      <button onClick={handleGitHubSignIn}>Sign in with GitHub</button> <br/>
      <button onClick={handleFaceBookSignIn}>Sign in with Facebook</button>
    </>
  );
}
