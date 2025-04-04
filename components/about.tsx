"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a software engineer with a passion for solving real-world problems through technology. I specialize in Flutter development, having built a vegetable management system and integrated machine learning models. My tech stack includes Flutter, Dart, Firebase, Next.js, and Tailwind CSS. I'm currently deepening my knowledge of Dart and exploring SwiftUI for iOS development. Outside of coding, I teach mathematics on my YouTube channel and focus on fitness and marketing strategies for my gym.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy <span className="font-medium">learning new things</span>. I teach mathematics on my YouTube channel and explore fitness and marketing strategies for my gym. I enjoy learning about <span className="font-medium">history and philosophy</span>, experimenting with <span className="font-medium">UI/UX design</span>, and staying updated with the latest industry trends. I'm also learning how to play the guitar.
      </p>

    </motion.section>
  );
}
