import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Link, redirect } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Dog Tracker" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function Index() {
  return (
    <div className="flex h-screen">
      <Link to="/new-profile">
        <Button>Generate new dog profile</Button>
      </Link>
    </div>
  );
}
