import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
