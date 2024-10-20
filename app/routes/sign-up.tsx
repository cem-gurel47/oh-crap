import { SignUp } from "@clerk/remix";

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
