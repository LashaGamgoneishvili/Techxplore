"use client";
import Image from "next/image";
import Link from "next/link";
import HomePage from "../components/mainpage/HomePage";
import Landing from "../components/mainpage/Landing";
let data = [];
const updateUser = async () => {
  try {
    const res = await fetch("http://localhost:8000/questions", {
      cache: "no-cache",
    });
    data = await res.json();
    console.log("data", data);
  } catch (err) {
    console.log("Error", err);
  }
};

updateUser();

console.log(data.length > 0);

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-2 items-stretch  justify-between text-black  bg-white">
      <Landing />
      <HomePage />
    </main>
  );
}
