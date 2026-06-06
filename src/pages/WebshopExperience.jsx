import { Link } from "react-router-dom";

export default function WebshopExperience() {
  return (<main className="min-h-screen bg-[#090909] text-[#E8E1D9] px-6 py-20">

    <div className="max-w-5xl mx-auto">

      <p className="uppercase tracking-[0.4em] text-xs text-zinc-400 mb-6">
        JavaScript Frameworks
      </p>

      <h1 className="text-6xl md:text-8xl mb-10"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        Webshop Experience
      </h1>

      <img
        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
        alt="Featured showcase image for the Webshop Experience project."
        className="w-full rounded-3xl mb-16"
      />

      <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-white/30 transition duration-500">


        <h2
          className="text-3xl mb-6"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Project Overview
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Webshop Experience is an ecommerce application built using React
          and the Noroff Online Shop API. The project focuses on creating a
          modern shopping experience where users can browse products, view
          product details, manage a shopping cart, and complete purchases
          through a responsive and user-friendly interface.
        </p>


      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">


        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition duration-500">

          <h2 className="text-2xl mb-6">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full border border-white/20">React</span>

            <span className="px-4 py-2 rounded-full border border-white/20">Vite</span>

            <span className="px-4 py-2 rounded-full border border-white/20">JavaScript</span>

            <span className="px-4 py-2 rounded-full border border-white/20">CSS</span>

            <span className="px-4 py-2 rounded-full border border-white/20">Noroff Online Shop API</span>

            <span className="px-4 py-2 rounded-full border border-white/20">GitHub</span>

            <span className="px-4 py-2 rounded-full border border-white/20">Netlify</span>

          </div>

        </div>

        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition duration-500">

          <h2 className="text-2xl mb-6">Improvements Made</h2>

          <ul className="space-y-4 text-zinc-300">

            <li>✓ Improved component structure and code organization</li>

            <li>✓ Enhanced responsive layouts</li>

            <li>✓ Refined shopping cart functionality</li>

            <li>✓ Improved product presentation and navigation</li>

            <li>✓ Optimized overall user experience</li>

          </ul>

        </div>


      </div>

      <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-white/30 transition duration-500">


        <h2 className="text-3xl mb-6">
          Future Improvements
        </h2>

        <div className="space-y-4 text-zinc-300">

          <div>→ Add product filtering and sorting</div>

          <div>→ Improve search functionality</div>

          <div>→ Add wishlist functionality</div>

          <div>→ Enhance accessibility compliance</div>

          <div>→ Add user account features</div>

        </div>


      </div>

      <div className="flex gap-4 flex-wrap">


        <a
          href="https://superb-gumdrop-a6ecb5.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-white/20 text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition duration-500"
        >
          Visit Live Site
        </a>

        <a
          href="https://github.com/NoroffFEU/jsfw-2025-v1-janina-javascriptframeworks.git"
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
