import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import saviruIMg from "@/public/saviru.jpg"
import travelex from "@/public/travel.jpg"
import ridepal from "@/public/ridepal.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Saviru",
    description:
      "Saviru is a vegetable management system that helps farmers optimize production using data and machine learning for better efficiency and cost reduction.",
    tags: ["FLutter", "Firebase", "Flask", "ios", "Figma","Git"],
    imageUrl: saviruIMg,
  },
  {
    title: "Ceylon TravelEX",
    description:
      "Ceylon Travelex is a Sri Lankan travel agency offering personalized tours to explore the country's beauty and culture.",
    tags: ["HTML", "CSS", "W3 forms", "JavaScript", "Git"],
    imageUrl: travelex,
  },
  {
    title: "Ride Pal",
    description:
      "Ride Pal is an app that helps users find garages and rent vehicles, providing a convenient platform for vehicle maintenance and rentals.",
    tags: ["Flutter", "UI/UX", "Figma","Git"],
    imageUrl: ridepal,
  },
] as const;

export const skillsData = [
  "Flutter",
  "Dart",
  "Firebase",
  "SwiftUI",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Git",
  "Tailwind",
] as const;
