"use client";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

function BurgerManue() {
  const [active, setActive] = useState(false);
  const [blogdropDown, setBlogDropDown] = useState(false);
  const [latestdropDown, setLatestdropDown] = useState(false);
  const [pagesdropDown, setPagesdropDown] = useState(false);
  return (
    <>
      <div onClick={() => setActive(true)}>
        <IoIosMenu />
      </div>
      {active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 bg-white opacity-100 w-full h-screen dark:bg-[#282c34] dark:text-white"
          >
            <div className="flex gap-4 z-20 justify-between items-center p-8">
              <div className="flex justify-center items-center gap-4 text-xl ">
                {/* {typedUser && typedUser.role[0] === "admin" && (
                  <div
                    className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300"
                    onClick={() => setActive((active) => !active)}
                  >
                    <Link href="/admin">
                      <MdOutlineAdminPanelSettings />
                    </Link>
                  </div>
                )} */}
                {/* <div className=" z-20 relative">
                  <AuthDropdown user={user} />
                </div> */}
              </div>
              <div className=" flex justify-start rounded-md gap-5  items-center">
                <div onClick={() => setActive(false)}>
                  <IoMdClose />
                </div>
              </div>
            </div>
            <nav className="">
              <div className="flex flex-col  items-center justify-center gap-8">
                <div
                  className=" cursor-pointer p-1   hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/">home</Link>
                </div>
                <div
                  className=" cursor-pointer p-1    hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/shop">shop</Link>
                </div>

                <div
                  className="hover:text-[#ff2020] hover:duration-300 cursor-pointer"
                  onClick={() => setActive(false)}
                >
                  about
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p>latest</p>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <p>blog</p>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={() => setPagesdropDown((drop) => !drop)}
                  >
                    <p>pages</p>
                  </div>
                </div>

                <div
                  className=" cursor-pointer p-1   [transition:all_ease_0.2s]  hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  page
                </div>
                <div
                  className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/contact">contact</Link>
                </div>
              </div>
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default BurgerManue;
