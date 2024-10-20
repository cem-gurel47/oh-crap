import { json, Link, redirect, useLoaderData } from "@remix-run/react";
import { useAuth, UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId && !args.request.url.endsWith("/sign-in")) {
    return redirect("/sign-in");
  }
  return json({ isSignedIn: !!userId });
};

const Header = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return null;
  }

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/">
        <h1>Dog tracker</h1>
      </Link>
      <div className="flex gap-4">
        <Link to="/new-profile" prefetch="intent">
          New Profile
        </Link>
        <Link to="/profiles" prefetch="intent">
          Profiles
        </Link>
        <UserButton signInUrl="/sign-in" />
      </div>
    </header>
  );
};

export default Header;
