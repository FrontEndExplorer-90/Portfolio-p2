import { Link } from "react-router-dom";

export default function CSSFrameworks() {
  return (<main className="min-h-screen bg-[#090909] text-[#E8E1D9] px-6 py-20">

    <div className="max-w-5xl mx-auto">

      <p className="uppercase tracking-[0.4em] text-xs text-[#D4A373] mb-6">
        CSS Frameworks
      </p>

      <h1 className="text-6xl md:text-8xl mb-10">
        CSS Frameworks Social Media
      </h1>

      <img
        src="https://i.postimg.cc/RZPLc7gL/Chat-GPT-Image-Jun-5-2026-10-53-44-PM.webp"
        alt="CSS Frameworks Social Media Project"
        className="w-full rounded-3xl mb-16"
      />

      <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-[#D4A373]/30 transition duration-500">


        <h2 className="text-3xl mb-6">
          Project Overview
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          This project was developed as part of the CSS Frameworks course
          assignment. The goal was to build a responsive social media
          application using Bootstrap while focusing on reusable components,
          accessibility, responsive layouts, and modern frontend development
          practices.
        </p>


      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">


        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#D4A373]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full border border-[#D4A373]/40">
              Bootstrap
            </span>

            <span className="px-4 py-2 rounded-full border border-[#D4A373]/40">
              HTML5
            </span>

            <span className="px-4 py-2 rounded-full border border-[#D4A373]/40">
              CSS3
            </span>

            <span className="px-4 py-2 rounded-full border border-[#D4A373]/40">
              JavaScript
            </span>

            <span className="px-4 py-2 rounded-full border border-[#D4A373]/40">
              GitHub
            </span>

          </div>

        </div>

        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#D4A373]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Improvements Made</h2>

          <ul className="space-y-4 text-zinc-300">

            <li>✓ Improved responsive layouts</li>

            <li>✓ Improved visual consistency</li>

            <li>✓ Verified accessibility and navigation</li>

            <li>✓ Refined project presentation</li>

            <li>✓ Updated documentation and repository structure</li>

          </ul>

        </div>


      </div>

      <div className="bg-[#111018] border border-[#D4A373]/20 rounded-3xl p-8 mb-16 hover:border-[#D4A373]/30 transition duration-500">


        <h2 className="text-3xl mb-6">
          Future Improvements
        </h2>

        <div className="space-y-4 text-zinc-300">

          <div>→ Add additional social media features</div>

          <div>→ Improve mobile interactions</div>

          <div>→ Expand profile customization</div>

          <div>→ Enhance accessibility further</div>

        </div>


      </div>

      <div className="flex gap-4 flex-wrap">


        <a
          href="https://gleeful-sundae-5317ff.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[#D4A373] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#D4A373] hover:text-black transition duration-500"
        >
          Visit Live Site
        </a>

        <a
          href="https://github.com/FrontEndExplorer-90/CCSframeworksCA.git"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
        >
          GitHub Repository
        </a>

        <Link
          to="/"
          className="px-8 py-4 border border-white/10 text-zinc-400 uppercase tracking-[0.3em] text-xs hover:border-white/30 hover:text-white transition duration-500"
        >
          Back To Portfolio
        </Link>

      </div>
    </div>
  </main >
  );
}
