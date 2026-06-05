import { motion } from "framer-motion";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import NookMarket from "./pages/NookMarket";
import Holidaze from "./pages/Holidaze";
import WebshopExperience from "./pages/WebshopExperience";
import JSocial from "./pages/JSocial";
import CSSFrameworks from "./pages/CSSFrameworks";

export default function App() {

  const [showEmail, setShowEmail] = useState(false);

  return (
    <main className="bg-[#090909] text-[#E8E1D9] overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Cinematic Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,124,82,0.12),transparent_60%)]"></div>

        {/* Navigation */}
        <header className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex items-center justify-between">

          <a href="#top">
            <div
              className="text-[#A67C52] text-2xl leading-none transition duration-500 hover:scale-105"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              JM
            </div>
          </a>


          <nav
            className="flex gap-8 uppercase tracking-[0.25em] text-xs text-zinc-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <a
              href="#work"
              className="hover:text-[#E8E1D9] transition duration-500"
            >
              Work
            </a>

            <a
              href="#about"
              className="hover:text-[#E8E1D9] transition duration-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-[#E8E1D9] transition duration-500"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >

          <h1
            className="text-7xl md:text-9xl tracking-[0.2em]"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            JANINA
          </h1>

          <h2
            className="text-4xl md:text-6xl mt-4 text-[#A67C52]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            MEYER
          </h2>

          <p
            className="mt-8 uppercase tracking-[0.4em] text-sm text-zinc-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            FRONTEND DEVELOPER • UX DESIGN • DIGITAL EXPERIENCES
          </p>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >

          <span
            className="uppercase tracking-[0.4em] text-[10px] text-zinc-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Scroll
          </span>

          <motion.div
            className="w-px h-16 bg-[#A67C52] mt-3"
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-20 py-32"
      >


        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,16,24,0.18),transparent_60%)]"></div>

        {/* Huge Background Text */}
        <h2
          className="absolute text-[18vw] font-bold text-white/[0.02] uppercase pointer-events-none select-none"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Experience
        </h2>

        {/* Layout Container */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

          {/* Portrait Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center md:-mr-24"
          >

            {/* Glow Behind Image */}
            <div className="absolute w-[70%] h-[70%] bg-[#A67C52]/20 blur-3xl rounded-full"></div>

            {/* Portrait */}
            <img
              src="https://i.postimg.cc/L6Jf2jdZ/Profile-Pic.webp"
              alt="Janina Meyer portrait"
              className="relative z-10 w-full max-w-lg object-cover rounded-[2rem] opacity-90 shadow-2xl"
            />

            {/* Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent rounded-[2rem]"></div>

          </motion.div>

          {/* Philosophy Panel */}
          <motion.div
            className="relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-10 md:p-14 shadow-2xl md:mt-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >

            <p
              className="uppercase tracking-[0.4em] text-xs text-[#A67C52] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Philosophy
            </p>

            <h3
              className="text-4xl md:text-6xl leading-tight mb-8"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Designing immersive digital experiences with emotion,
              atmosphere, and intention.
            </h3>

            <p
              className="text-zinc-400 leading-relaxed text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              My work combines frontend development, UX design,
              cinematic storytelling, and emotionally-driven
              interfaces to create experiences that feel memorable,
              immersive, and alive. I’m drawn to elegant interactions,
              atmospheric visuals, and digital spaces that leave a
              lasting impression.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ================= TRANSITION ================= */}

      <div className="h-40 bg-gradient-to-b from-[#090909] via-[#120B0B] to-black"></div>

      {/* ================= NOOK MARKET SECTION ================= */}

      <section
        id="work"
        className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-20"
      >

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/Px5jVggG/Nook-Market-Banner.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Warm Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(166,124,82,0.18),transparent_45%)]"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-[#A67C52] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Featured Project
          </p>

          <h2
            className="text-5xl md:text-7xl mb-8 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            THE NOOK MARKET
          </h2>

          <p
            className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A fantasy-inspired auction platform blending immersive UX,
            atmospheric design, and modern frontend development into
            a cinematic digital marketplace experience.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://elegant-lebkuchen-c4df9d.netlify.app"
              className="px-8 py-4 border border-[#A67C52] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#A67C52] hover:text-black transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enter Experience
            </a>

            <a
              href="https://github.com/FrontEndExplorer-90/SP2-Nook-Market.git"
              className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GitHub
            </a>

          </div>
        </motion.div>
      </section>

      {/* ================= TRANSITION ================= */}

      <div className="h-40 bg-gradient-to-b from-black via-[#140D0A] to-[#090909]"></div>

      {/* ================= HOLIDAZE SECTION ================= */}

      <section className="relative min-h-screen flex items-center justify-end overflow-hidden px-6 md:px-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/Mp0MTvkW/Chat-GPT-Image-Apr-27-2026-02-41-00-PM.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Cold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(130,150,170,0.18),transparent_45%)]"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-2xl text-right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-[#D6B48A] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Featured Project
          </p>

          <h2
            className="text-5xl md:text-7xl mb-8 leading-tight text-[#F4E7D3]"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            HOLIDAYZE
          </h2>

          <p
            className="text-zinc-300 text-lg leading-relaxed mb-10 ml-auto max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A cinematic booking experience inspired by luxury travel,
            immersive exploration, and elegant user interaction across
            modern digital spaces.
          </p>

          <div className="flex gap-4 flex-wrap justify-end">

            <a
              href="https://magenta-tapioca-d2b55e.netlify.app"
              className="px-8 py-4 border border-[#D6B48A] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#D6B48A] hover:text-black transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enter Experience
            </a>

            <a
              href="https://github.com/FrontEndExplorer-90/holidayze-booking-app.git"
              className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GitHub
            </a>

          </div>
        </motion.div>
      </section>

      {/* ================= TRANSITION ================= */}

      <div className="h-40 bg-gradient-to-b from-[#140D0A] via-black to-[#090909]"></div>

      {/* ================= WEBSHOP EXPERIENCE SECTION ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Soft Editorial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_45%)]"></div>

        {/* Huge Background Text */}
        <h2
          className="absolute text-[18vw] font-bold text-white/[0.03] uppercase pointer-events-none select-none"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Commerce
        </h2>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-zinc-400 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Featured Project
          </p>

          <h2
            className="text-5xl md:text-7xl mb-8 leading-tight text-[#F5F5F5]"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            WEBSHOP EXPERIENCE
          </h2>

          <p
            className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A modern ecommerce experience focused on elegant interaction,
            responsive design, and seamless digital usability through
            immersive frontend development.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://superb-gumdrop-a6ecb5.netlify.app"
              className="px-8 py-4 border border-white/20 text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Enter Experience
            </a>

            <a
              href="https://github.com/NoroffFEU/jsfw-2025-v1-janina-javascriptframeworks.git"
              className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              GitHub
            </a>

          </div>
        </motion.div>
      </section>

      {/* ================= TRANSITION ================= */}

      <div className="h-40 bg-gradient-to-b from-[#090909] via-[#111018] to-black"></div>

      {/* ================= JSOCIAL SECTION ================= */}

      <section className="relative min-h-screen flex items-center justify-end overflow-hidden px-6 md:px-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/kG9x5LDY/Chat-GPT-Image-Jun-4-2026-06-55-54-PM.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Social Blue Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(88,101,242,0.18),transparent_45%)]"></div>

        <motion.div
          className="relative z-10 max-w-2xl text-right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-[#7C8CFF] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Featured Project
          </p>

          <h2
            className="text-5xl md:text-7xl mb-8 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            JSOCIAL
          </h2>

          <p
            className="text-zinc-300 text-lg leading-relaxed mb-10 ml-auto max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A social media platform where users can create posts,
            follow profiles, manage personal content, and engage
            with a shared digital community.
          </p>

          <div className="flex gap-4 flex-wrap justify-end">

            <a
              href="https://euphonious-swan-5f89d1.netlify.app/post/index.html"
              className="px-8 py-4 border border-[#7C8CFF] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#7C8CFF] hover:text-black transition duration-500"
            >
              Enter Experience
            </a>

            <a
              href="https://github.com/FrontEndExplorer-90/JSocial---FED2.git"
              className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
            >
              GitHub
            </a>

          </div>

        </motion.div>
      </section>

      {/* ================= TRANSITION ================= */}

      <div className="h-40 bg-gradient-to-b from-[#090909] via-[#111018] to-black"></div>

      {/* ================= CSS FRAMEWORKS SOCIAL MEDIA ================= */}

      <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-20">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/RZPLc7gL/Chat-GPT-Image-Jun-5-2026-10-53-44-PM.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(245,158,11,0.18),transparent_45%)]"></div>

        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-[#D4A373] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Earlier Project
          </p>

          <h2
            className="text-5xl md:text-7xl mb-8 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            CSS FRAMEWORKS
          </h2>

          <p
            className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A social media application developed using Bootstrap and responsive
            design principles. The project focused on creating an accessible,
            visually consistent user experience while exploring component-based
            layouts and modern frontend workflows.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://gleeful-sundae-5317ff.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#D4A373] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#D4A373] hover:text-black transition duration-500"
            >
              Enter Experience
            </a>

            <a
              href="https://github.com/FrontEndExplorer-90/CCSframeworksCA.git"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
            >
              GitHub
            </a>

          </div>

        </motion.div>

      </section>


      {/* ================= CONTACT / FOOTER SECTION ================= */}

      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,124,82,0.12),transparent_55%)]"></div>

        {/* Noise / Atmosphere */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

        {/* Huge Background Text */}
        <h2
          className="absolute top-[55%] text-[18vw] font-bold text-white/[0.02] uppercase pointer-events-none select-none"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Contact
        </h2>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <p
            className="uppercase tracking-[0.4em] text-xs text-[#A67C52] mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact
          </p>

          <h2
            className="text-5xl md:text-8xl leading-tight mb-10"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Let’s build something immersive.
          </h2>

          <p
            className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-20"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Frontend development, UX design, and cinematic digital
            experiences crafted with atmosphere, emotion, and intention.
          </p>

          {/* Links */}
          <div
            className="flex flex-wrap justify-center gap-10 uppercase tracking-[0.3em] text-xs"
            style={{ fontFamily: "Inter, sans-serif" }}
          >

            <button
              onClick={() => setShowEmail(!showEmail)}
              className="text-zinc-500 hover:text-[#E8E1D9] transition duration-500"
            >
              {showEmail
                ? "janmey38613@stud.noroff.no"
                : "Email"}
            </button>

            <a
              href="https://github.com/FrontEndExplorer-90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#E8E1D9] transition duration-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/janina-meyer-07547b2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#E8E1D9] transition duration-500"
            >
              LinkedIn
            </a>

          </div>

          {/* Tiny Footer */}
          <div className="mt-24 text-[#5A4635] text-xs tracking-[0.3em] uppercase">

            JANINA MEYER — 2026

          </div>

        </motion.div>
      </section>
      <div className="h-32 bg-[#090909]"></div>
    </main>
  );
}
