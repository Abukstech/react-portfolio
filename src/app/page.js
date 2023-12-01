"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/legacy/image";

import deved from "/public/abubakr.png";
import design from "/public/design.png";
import code from "/public/code.png";
import consulting from "/public/consulting.png";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              DevelopedbyGDF
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <article className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Abdulmajeed Abubakar Ayomikuleyin
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              FullStack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">
              Freelancer providing services for website development and
              needs.Hit me up Lets get Started.
            </p>
          </article>

          <article className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </article>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="" />
          </div>
        </section>

        <section>
          <article>
            <h3 className="text-3xl py-1 mt-10 dark:text-teal-600">
              Services I render
            </h3>
            <ul className="text-md py-5 leading-8 text-gray-800 my-19  dark:text-white">
              <li>APIs Development</li>
              <li>Handling User Authentication</li>
              <li>Backend Development</li>
              <li>Frontend Development</li>
            </ul>
            <p className="text-md py-5 leading-8 text-gray-800  dark:text-white ">
              I offer from a wide range of services including programming and
              teaching
            </p>
          </article>
          <div className="lg:flex gap-16">
            <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating Elegant designs suitable for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                MERN Stack development
              </h3>
              <p className="py-2">
                Building Robust and scalable web applications
              </p>
              <h4 className="py-4 text-teal-600">Libaries I use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">RestFul API</p>
              <p className="text-gray-800 py-1">GraphQl</p>
            </div>
            <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating Elegant designs suitable for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <article>
            <h3 className="text-3xl py-1 dark:text-teal-600">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white ">
              I offer from a wide range of services including programming and
              teaching
            </p>
          </article>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
