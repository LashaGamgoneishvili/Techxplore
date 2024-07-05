"use client";
// pages/quiz.js
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosGlobe } from "react-icons/io";

const QuizPage = () => {
  const [timeLeft, setTimeLeft] = useState(500);

  const mins = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(function () {
    const id = setInterval(function () {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="container sm:px-8 px-2 md:px-32  w-full mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Next quiz in</h1>
      <p className="text-xl mb-6">
        {mins < 10 && "0"} {mins}: {seconds < 10 && "0"}
        {seconds}
      </p>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-0  lg:items-center w-full   justify-between  mb-6">
        <div className="pr-4">
          <p className="text-sm text-gray-500">Ranking</p>
          <h2 className="text-2xl font-semibold">
            Find the fastest growing startups in your city
          </h2>
          <p className="text-gray-500 mb-4">
            See how you stack up against other players
          </p>
          <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-3xl">
            {timeLeft && timeLeft > 0 ? (
              <Link href="/quiz">
                Play
                <span className="ml-2">➔</span>
              </Link>
            ) : (
              <p className=" text-[#ff2020]">Time is up</p>
            )}
          </button>
        </div>
        <div
          className="sm:w-[450px] w-72 h-64 rounded-md"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/c1c61f85-b85d-4bb5-a96a-c2f8e471e0b9.png")',
          }}
        ></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-0  lg:items-center w-full   justify-between  mb-6">
        <div className="pr-4">
          <p className="text-sm text-gray-500">No ranking</p>
          <h2 className="text-2xl font-semibold">
            Find the fastest growing startups in your city
          </h2>
          <p className="text-gray-500 mb-4">Play at your own pace</p>
          <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-3xl">
            {timeLeft && timeLeft > 0 ? (
              <Link href="/quiz">
                Play
                <span className="ml-2">➔</span>
              </Link>
            ) : (
              <p className=" text-[#ff2020]">Time is up</p>
            )}
          </button>
        </div>
        <div
          className="sm:w-[450px] w-72 h-64 rounded-md"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/c1c61f85-b85d-4bb5-a96a-c2f8e471e0b9.png")',
          }}
        ></div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">More options</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between  p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-2xl  bg-gray-100 p-4 rounded-md">
              <IoIosGlobe />
            </span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Find the fastest growing startups in your city
              </h3>
              <p className="text-gray-500">21 companies</p>
            </div>
          </div>
          <span>➔</span>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-2xl  bg-gray-100 p-4 rounded-md">
              <IoIosGlobe />
            </span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Find the fastest growing startups in your city
              </h3>
              <p className="text-gray-500">21 companies</p>
            </div>
          </div>
          <span>➔</span>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-2xl  bg-gray-100 p-4 rounded-md">
              <IoIosGlobe />
            </span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Find the fastest growing startups in your city
              </h3>
              <p className="text-gray-500">21 companies</p>
            </div>
          </div>
          <span>➔</span>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
