import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Dog Tracker" },
    { name: "description", content: "Welcome to Remix!" },
  ];
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
