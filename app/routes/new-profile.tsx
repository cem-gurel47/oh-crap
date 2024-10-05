import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Form } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Dog Tracker - New Profile" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [allergyInput, setAllergyInput] = useState<string>("");
  const allergyInputRef = useRef<HTMLInputElement>(null);
  const [picture, setPicture] = useState<File | null>(null);

  function addAllergy(e: React.MouseEvent<HTMLButtonElement>, allergy: string) {
    e.preventDefault();
    if (allergies.includes(allergy)) {
      return;
    }
    setAllergies([...allergies, allergy]);
    setAllergyInput("");
    allergyInputRef.current?.focus();
  }

  function removeAllergy(allergy: string) {
    setAllergies(allergies.filter((a) => a !== allergy));
  }

  function handlePictureChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPicture(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("allergies", allergies.join(","));
    if (picture) {
      formData.append("picture", picture);
    }
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold">New Dog Profile</h1>
      <div className="flex gap-4 w-full mt-4 flex-col sm:flex-row">
        <Card>
          <CardHeader>
            <CardTitle>Dog Picture</CardTitle>
            <CardDescription>
              Upload a picture of your dog to generate a profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Avatar className="w-48 h-48">
              <AvatarImage src={picture ? URL.createObjectURL(picture) : ""} />
              <AvatarFallback>
                {picture ? picture.name.split(".")[0] : "Dog"}
              </AvatarFallback>
            </Avatar>
          </CardContent>
          <CardFooter>
            <Input
              type="file"
              name="picture"
              accept="image/*"
              required
              onChange={handlePictureChange}
            />
          </CardFooter>
        </Card>
        <Form
          className="flex flex-col gap-2 mt-4 w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <Input type="text" name="name" placeholder="Dog Name" required />
          <Input type="text" name="owner" placeholder="Owner Name" required />
          <Input
            type="tel"
            name="phone"
            placeholder="Owner Phone Number"
            required
          />

          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              name="allergies"
              placeholder="Allergies"
              value={allergyInput}
              onChange={(e) => setAllergyInput(e.target.value)}
              ref={allergyInputRef}
            />
            <Button onClick={(e) => addAllergy(e, allergyInput)}>
              Add Allergy
            </Button>
          </div>
          <ul className="flex flex-wrap gap-2">
            {allergies.map((allergy) => (
              <li
                key={allergy}
                className="flex items-center gap-2 border pl-2 rounded-md w-fit"
              >
                {allergy}
                <Button variant="ghost" onClick={() => removeAllergy(allergy)}>
                  x
                </Button>
              </li>
            ))}
          </ul>
          <Textarea
            name="special_needs"
            placeholder="Special Needs (optional)"
            rows={4}
          />
          <Button type="submit">Generate</Button>
        </Form>
      </div>
    </div>
  );
}
