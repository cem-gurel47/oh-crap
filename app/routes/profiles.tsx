import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import prisma from "~/lib/prisma";

export const meta: MetaFunction = () => {
  return [
    { title: "Dog Tracker - Profiles" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { dogs } = useLoaderData<typeof loader>();
  if (dogs.length === 0) {
    return <div>No dogs found</div>;
  }
  return (
    <div className="flex h-screen">
      {dogs.map((dog) => (
        <div key={dog.id}>{dog.name}</div>
      ))}
    </div>
  );
}

export async function loader() {
  const dogs = await prisma.dog.findMany();
  return json({ dogs });
}
