"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosGlobe } from "react-icons/io";

const QuizPage = () => {
  const [firstQuiz, setFirstQuiz] = useState(5450);
  const [secondQuizTime, setSecondQuizTime] = useState(200);

  // const days = Math.floor(firstQuiz / (60 * 60 * 24));
  const hours = Math.floor((firstQuiz % (60 * 60 * 24)) / (60 * 60));
  const mins = Math.floor((firstQuiz % (60 * 60)) / 60);
  const seconds = firstQuiz % 60;

  useEffect(() => {
    const id = setInterval(() => {
      setFirstQuiz((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // const secDays = Math.floor(secondQuizTime / (60 * 60 * 24));
  const secHours = Math.floor((secondQuizTime % (60 * 60 * 24)) / (60 * 60));
  const secMins = Math.floor((secondQuizTime % (60 * 60)) / 60);
  const secondQuiz = secondQuizTime % 60;

  useEffect(() => {
    const id = setInterval(() => {
      setSecondQuizTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="container sm:px-8 px-2 md:px-32  w-full mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Choose a quiz</h1>

      <div className="flex flex-col shadow-lg p-4 rounded-lg lg:flex-row gap-16 lg:gap-0  lg:items-center w-full   justify-between  mb-6">
        <div className="pr-8 xl:w-2/4 ">
          {/* <p className="text-sm text-gray-500">Ranking</p> */}
          <h1 className="text-2xl font-semibold">
            Quiz without visible ranking
          </h1>
          <p className="text-gray-500 mb-4 text-sm mt-2">
            In case you take this quiz you won&apos;t be able to see your
            ranking before purchasing an item. You will still be able to see
            your score to estimate whether you&apos;re eligible to receive the
            prize.
          </p>
          <div className=" flex items-center justify-between w-full h-28 ">
            <div className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-3xl">
              {firstQuiz && firstQuiz > 0 ? (
                <Link href="/quiz" className="group">
                  Play
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                    ➔
                  </span>
                </Link>
              ) : (
                <p className=" text-[#ff2020]">Time is up</p>
              )}
            </div>
            <div
              className={`${
                mins < 5 && "text-[#ff2020]"
              } timer-container flex gap-2`}
            >
              <div className="time-box  w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {hours < 10 ? (
                  <div className="flex justify-center gap-2 items-baseline">
                    <span className="time">
                      {String(hours).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">h</span>
                  </div>
                ) : (
                  <div className="flex  justify-between items-baseline">
                    <span className="time">{String(hours)}</span>
                    <span className="label text-xs">H</span>
                  </div>
                )}
              </div>
              <div className="time-box  w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {mins < 10 ? (
                  <div className="flex justify-between items-baseline">
                    <span className="time">
                      {String(mins).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">min</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <span className="time ">{String(mins)}</span>
                    <span className="label text-xs">min</span>
                  </div>
                )}
              </div>

              <div className="time-box w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {seconds < 10 ? (
                  <div className="flex justify-between items-baseline">
                    <span className="time">
                      {String(seconds).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">sec</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <span className="time w-24">
                      {String(seconds).padStart(0, "")}
                    </span>
                    <span className="label text-xs">sec</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="sm:w-[450px] w-72 h-64 rounded-md"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/c1c61f85-b85d-4bb5-a96a-c2f8e471e0b9.png")',
          }}
        ></div>
      </div>
      <div className="flex flex-col shadow-lg p-4 rounded-lg lg:flex-row gap-16 lg:gap-0  lg:items-center w-full   justify-between  mb-6">
        <div className="pr-8 xl:w-2/4 ">
          {/* <p className="text-sm text-gray-500">No ranking</p> */}
          <h2 className="text-2xl font-semibold">Quiz with visible ranking</h2>
          <p className="text-gray-500 mb-4">
            In case you take this quiz you won&apos;t be able to see your
            ranking before purchasing an item. You will still be able to see
            your score to estimate whether you&apos;re eligible to receive the
            prize.
          </p>
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-3xl">
              {secondQuizTime && secondQuizTime > 0 ? (
                <>
                  <Link href="/quiz" className="group">
                    Play
                    <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                      ➔
                    </span>
                  </Link>
                </>
              ) : (
                <p className=" text-[#ff2020]">Time is up</p>
              )}
            </div>

            <div
              className={`${
                secMins < 5 && "text-[#ff2020]"
              } timer-container flex gap-2`}
            >
              <div className="time-box w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {secHours < 10 ? (
                  <div className="flex justify-center gap-2 items-baseline">
                    <span className="time">
                      {String(secHours).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">h</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <span className="time">{String(secHours)}</span>
                    <span className="label text-xs">h</span>
                  </div>
                )}
              </div>
              <div className="time-box w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {secMins < 10 ? (
                  <div className="flex justify-between items-baseline">
                    <span className="time">
                      {String(secMins).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">min</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <span className="time ">{String(secMins)}</span>
                    <span className="label text-xs">min</span>
                  </div>
                )}
              </div>

              <div className="time-box w-24  p-6 bg-[#e1f7e6] rounded-xl">
                {secondQuiz < 10 ? (
                  <div className="flex justify-between items-baseline">
                    <span className="time">
                      {String(secondQuiz).padStart(2, "0")}
                    </span>
                    <span className="label text-xs">sec</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-baseline">
                    <span className="time w-24">
                      {String(secondQuiz).padStart(0, "")}
                    </span>
                    <span className="label text-xs">sec</span>
                  </div>
                )}
              </div>
            </div>
          </div>
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
          <span className="hover:translate-x-1 cursor-pointer transition-transform duration-200">
            ➔
          </span>
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
          <span className="hover:translate-x-1 cursor-pointer transition-transform duration-200">
            ➔
          </span>
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
          <span className="hover:translate-x-1 cursor-pointer transition-transform duration-200">
            ➔
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
