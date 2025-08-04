// import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function Formulaire() {
  // const [formData, setFormData] = useState<string[]>([])
//   const [name, setName] = useState<string>("");
  return (
    <Card className="w-full bg-[#0b1a2a] border-2 border-[#0f2133] rounded-none">
      <form className="w-full h-full">
        <CardContent className="px-4 ">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-gray-300 uppercase">
              movie name{" "}
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 bg-[#233a50] mt-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="genres" className="text-gray-300 uppercase">
              Genres & Subgenres{" "}
            </label>
            <input
              type="text"
              id="genres"
              className="w-full h-10 bg-[#233a50] mt-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="rating" className="text-gray-300 uppercase">
              Rating Range{" "}
            </label>
            <input
              type="text"
              id="rating"
              className="w-full h-10 bg-[#233a50] mt-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-gray-300 uppercase">
              Release Year{" "}
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 bg-[#233a50] mt-2"
            />
          </div>
        <Button className="hover:bg-red-500 w-full mt-4 rounded-none h-10 uppercase text-lg cursor-pointer bg-[rgba(255,0,0,90)]">submit</Button>
        </CardContent>
      </form>
    </Card>
  );
}
