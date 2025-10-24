import { SignedOut, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1>
        home page </h1>
      <SignedOut>
        <SignUpButton mode="modal"> signup </SignUpButton>
      </SignedOut>
    </div >
  );
}
