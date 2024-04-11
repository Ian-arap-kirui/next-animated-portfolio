"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
// Define technologies and their corresponding icons
const technologies = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs2.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "Express.js", icon: "/expressjs-icon.png" },
  { name: "Figma", icon: "/figma.svg" },
  { name: "JWT", icon: "/jwt.svg" },
  { name: "Vite", icon: "/vite.svg" },
  { name: "MaterialUi", icon: "/materialui.svg" },
  { name: "PostMan", icon: "/postman.svg" },
];

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    projectName: "GreenBay Travel Ltd ->",
    title: "Tours and Travel app",
    desc: " Our client wanted a better way to show their services, company info, and let people book tours worldwide.",
    solution:
      " We built an easy-to-use app with pages for learning about the company, contacting them, and booking tours. It's made with modern technology to ensure a smooth experience.",
    img: "/greenbay.png",
    link: "https://greenbay-travel.com",
    technologiesUsed: [
      "React",
      "Vite",
      "Figma",
      "Next.js",
      "MongoDB",
      "PostMan",
      "JWT",
    ],
  },

  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    projectName: "Ole Kaparo Foundation ->",
    title: "Foundation Web App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/olekaparo.png",
    link: "https://olekaparofoundation.org",
    technologiesUsed: [
      "React",
      "Vite",
      "Figma",
      "Next.js",
      "MongoDB",
      "PostMan",
      "JWT",
    ],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    projectName: "Afyabook E-Pharma ->",
    title: "E-commerce App (C2B & B2B)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/mock-afyabook.png",
    link: "https://afyabook.com",
    technologiesUsed: [
      "React",
      "MaterialUi",
      "Figma",
      "Next.js",
      "MongoDB",
      "PostMan",
      "JWT",
    ],
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    projectName: "Personal Blog app ->",
    title: "Blog Web App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/blog-mockup.png",
    link: "https://www.ianmark.xyz/",
    technologiesUsed: [
      "React",
      "Vite",
      "Figma",
      "Next.js",
      "MongoDB",
      "PostMan",
      "JWT",
    ],
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    projectName: "",
    title: "Blog Web App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/blog-mockup.png",
    link: "https://www.ianmark.xyz/",
    technologiesUsed: [
      "React",
      "Vite",
      "Figma",
      "Next.js",
      "MongoDB",
      "PostMan",
      "JWT",
    ],
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl my-0.5">
                    {item.title}
                  </h1>
                  <div className="flex flex-row">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[300px]">
                      <Image src={item.img} alt="" fill />
                    </div>

                    <div className="flex flex-col items-start">
                      <Link
                        href={item.link}
                        className="flex justify-start text-black hover:underline "
                      >
                        {item.projectName}
                      </Link>
                      <p className="w-80 md:w96 lg:w-[500px] lg:text-lg mb-2 xl:w-[600px]">
                        <span>Problem:</span> {item.desc}
                      </p>
                      <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                        <span>Solution:</span> {item.solution}
                      </p>
                      <div className="flex gap-2 mt-4">
                        Under the Hood:
                        {item.technologiesUsed?.map((tech) => {
                          const techIcon = technologies.find(
                            (item) => item.name === tech
                          );
                          return (
                            <Image
                              key={tech}
                              src={techIcon?.icon}
                              alt={tech}
                              width={32}
                              height={32}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
