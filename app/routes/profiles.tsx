import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Dog Tracker - Profiles" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div className="flex h-screen"></div>;
}
