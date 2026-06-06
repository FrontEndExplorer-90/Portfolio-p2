import { Link } from "react-router-dom";

export default function Holidaze() {
  return (<main className="min-h-screen bg-[#090909] text-[#E8E1D9] px-6 py-20">

    <div className="max-w-5xl mx-auto">

      <p className="uppercase tracking-[0.4em] text-xs text-[#D6B48A] mb-6">
        Project Exam
      </p>

      <h1 className="text-6xl md:text-8xl mb-10">
        Holidaze
      </h1>

      <img
        src="https://i.postimg.cc/Mp0MTvkW/Chat-GPT-Image-Apr-27-2026-02-41-00-PM.webp"
        alt="Holidaze"
        className="w-full rounded-3xl mb-16"
      />

      <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-[#D6B48A]/30 transition duration-500">

        <h2 className="text-3xl mb-6">
          Project Overview
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          Holidaze is a modern accommodation booking platform inspired by
          services such as Airbnb. The application allows guests to browse
          venues, make bookings, and manage reservations, while venue
          managers can create, edit, and manage their own properties through
          a dedicated dashboard.
        </p>


      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">


        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#D6B48A]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">HTML5</span>

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">CSS3</span>

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">JavaScript</span>

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">Noroff Holidaze API</span>

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">GitHub</span>

            <span className="px-4 py-2 rounded-full border border-[#D6B48A]/40">Netlify</span>

          </div>

        </div>

        <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#D6B48A]/30 transition duration-500">

          <h2 className="text-2xl mb-6">Improvements Made</h2>

          <ul className="space-y-4 text-zinc-300">

            <li>✓ Improved responsive layouts across devices</li>

            <li>✓ Added role-based dashboards for guests and venue managers</li>

            <li>✓ Refined venue creation and editing functionality</li>

            <li>✓ Enhanced filtering and search experience</li>

            <li>✓ Improved overall user interface consistency</li>

          </ul>

        </div>


      </div>

      <div className="bg-[#111018] border border-[#D6B48A]/20 rounded-3xl p-8 mb-16 hover:border-[#D6B48A]/30 transition duration-500">


        <h2 className="text-3xl mb-6">
          Future Improvements
        </h2>

        <div className="space-y-4 text-zinc-300">

          <div>→ Add advanced venue filtering</div>

          <div>→ Improve calendar and booking visualization</div>

          <div>→ Add user notifications</div>

          <div>→ Enhance accessibility further</div>

          <div>→ Expand profile customization</div>

        </div>


      </div>

      <div className="flex gap-4 flex-wrap">

        <a
          href="https://magenta-tapioca-d2b55e.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-[#D6B48A] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#D6B48A] hover:text-black transition duration-500"
        >
          Visit Live Site
        </a>

        <a
          href="https://github.com/FrontEndExplorer-90/holidayze-booking-app.git"
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
  </main>

  );
}
