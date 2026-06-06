import { Link } from "react-router-dom";

export default function JSocial() {
  return (<main className="min-h-screen bg-[#090909] text-[#E8E1D9] px-6 py-20">

    <div className="max-w-5xl mx-auto">

      <p className="uppercase tracking-[0.4em] text-xs text-[#7C8CFF] mb-6">
        JavaScript 2
      </p>

      <h1 className="text-6xl md:text-8xl mb-10">
        JSocial
      </h1>

      <img
        src="https://i.postimg.cc/kG9x5LDY/Chat-GPT-Image-Jun-4-2026-06-55-54-PM.webp"
        alt="JSocial"
        className="w-full rounded-3xl mb-16"
      />

      <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-[#7C8CFF]/30 transition duration-500">

        <h2 className="text-3xl mb-6">
          Project Overview
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          JSocial is a social media platform built using JavaScript and the
          Noroff Social API. Users can register, log in, create posts,
          follow profiles, update their own content, and interact with a
          shared digital community through a responsive and modern interface.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#7C8CFF]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">JavaScript</span>

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">HTML5</span>

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">CSS3</span>

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">Noroff Social API</span>

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">GitHub</span>

            <span className="px-4 py-2 rounded-full border border-[#7C8CFF]/40">Netlify</span>

          </div>

        </div>

        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#7C8CFF]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Improvements Made</h2>

          <ul className="space-y-4 text-zinc-300">

            <li>✓ Improved authentication flow and user login experience</li>

            <li>✓ Implemented API key handling and secure API requests</li>

            <li>✓ Refined profile loading and account management</li>

            <li>✓ Improved navigation and overall user experience</li>

            <li>✓ Fixed bugs related to API integration and profile data</li>

          </ul>

        </div>

      </div>

      <div className="bg-[#111018] border border-[#7C8CFF]/20 rounded-3xl p-8 mb-16 hover:border-[#7C8CFF]/30 transition duration-500">

        <h2 className="text-3xl mb-6">
          Future Improvements
        </h2>

        <div className="space-y-4 text-zinc-300">

          <div>→ Add real-time notifications</div>

          <div>→ Improve profile customization options</div>

          <div>→ Expand social interaction features</div>

          <div>→ Improve accessibility and WCAG compliance</div>

          <div>→ Add richer media and content support</div>

        </div>

      </div>

      <div className="flex gap-4 flex-wrap">

        <a
          href="https://euphonious-swan-5f89d1.netlify.app/post/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[#7C8CFF] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#7C8CFF] hover:text-black transition duration-500"
        >
          Visit Live Site
        </a>

        <a
          href="https://github.com/FrontEndExplorer-90/JSocial---FED2.git"
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
