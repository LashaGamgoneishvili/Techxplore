"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BurgerManue from "../components/BurgerManue";
import { useState } from "react";
import { useEffect } from "react";

const StickyHeader = () => {
  const [header, setHeader] = useState(false);
  const router = useRouter();

  const scrollHeader = () => {
    const scrollpoint = window.innerHeight;
    if (window.scrollY > scrollpoint - 400) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      className={`h-20 w-full flex items-center z-50  px-8 xl:px-0   ${
        header && "fixed top-0 bg-white shadow-md animate-appearHeader"
      }`}
    >
      {header ? (
        <div className="bg-white h-20 flex items-center justify-between w-full border-b border-solid border-b-[#f0f3f4] animate-appearHeader py-2 lg:px-14  text-black">
          {/* <div className=" whitespace-nowrap md:px-10 px-4 py-3  w-full"> */}
          <div
            className="flex items-center gap-4 text-[#111517] cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em]">
              Qwizard
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 ">
            <div className="flex items-center gap-9">
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/quiz"
              >
                Qiuz
              </Link>
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/companies"
              >
                Companies
              </Link>
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-[#111517] text-sm font-medium leading-normal hover:border-b duration-100"
                href="/login"
              >
                Login
              </Link>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f3f4] text-[#111517] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#111517]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            <Link
              href="/profile"
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/5b9c7820-c161-462e-b5e9-6f693c8e49fb.png")',
              }}
            ></Link>
          </div>
          <div className="md:hidden text-2xl">
            <BurgerManue />
          </div>
          {/* </div> */}
        </div>
      ) : (
        <div className="bg-white flex justify-between items-center  border-b border-solid h-20 w-full border-b-[#f0f3f4]  py-2 lg:px-14  text-black">
          <div
            className="flex items-center gap-4 text-[#111517] cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em]">
              Qwizard
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 ">
            <div className="flex items-center gap-9">
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/quiz"
              >
                Qiuz
              </Link>
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/companies"
              >
                Companies
              </Link>
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/about"
              >
                About
              </Link>
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="relative text-[#111517] text-sm font-medium leading-normal hover:text-[#111517] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-[#111517] before:transition-all before:duration-300 before:ease-out hover:before:w-full"
                href="/login"
              >
                Login
              </Link>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f3f4] text-[#111517] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#111517]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            <Link
              href="/profile"
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/5b9c7820-c161-462e-b5e9-6f693c8e49fb.png")',
              }}
            ></Link>
          </div>
          <div className="md:hidden text-2xl">
            <BurgerManue />
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
