import Image from "next/image";
import React from "react";
import bolajiImage from "@/public/chatgpt-image.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import IconButton from "./IconButton";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl text-stone-800 mx-auto sm:flex-row flex-col-reverse gap-5 items-center  flex sm:justify-between px-4 ">
        <main className="flex flex-col justify-center items-start mt-16 gap-4">
          <h1 className="sm:text-4xl text-3xl  sm:font-bold">
            Saka Bolaji Waheed
          </h1>

          <p className="text-lg">
            Welcome to my portfolio! I'm a frontend developer passionate about
            building modern, responsive web applications with React, Next.js,
            and TypeScript. I specialize in creating scalable, maintainable UIs
            using functional components, React Hooks, and modern JavaScript.
          </p>
          <div className="flex items-center gap-5 mb-3">
            <IconButton>Projects</IconButton>
            <IconButton>Contact me</IconButton>
          </div>
          <div className="flex mt-2 gap-8">
            <div className="p-2 rounded-full bg-black hover:bg-gray-800 transition">
              <FaGithub className="text-white text-2xl" />
            </div>

            <div className="p-2 rounded-full bg-[#0077B5] hover:bg-[#006699] transition">
              <FaLinkedin className="text-white text-2xl" />
            </div>

            <div className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition">
              <FaTwitter className="text-white text-2xl" />
            </div>
          </div>
        </main>

        <section>
          <div className="relative h-80 w-80 sm:w-[450px] sm:h-[450px] aspect-video sm:aspect-square">
            <Image
              src={bolajiImage}
              alt="bolaji"
              placeholder="blur"
              fill
              className="object-cover object-top rounded-full sm:rounded-2xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
