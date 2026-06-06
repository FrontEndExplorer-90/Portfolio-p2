import { Link } from "react-router-dom";
export default function NookMarket() {
    return (<main className="min-h-screen bg-[#090909] text-[#E8E1D9] px-6 py-20">

        <div className="max-w-5xl mx-auto">

            <p className="uppercase tracking-[0.4em] text-xs text-[#A67C52] mb-6">
                Semester Project 2
            </p>

            <h1 className="text-6xl md:text-8xl mb-10"
                style={{ fontFamily: "Cinzel, serif" }}
            >
                The Nook Market
            </h1>

            <img
                src="https://i.postimg.cc/Px5jVggG/Nook-Market-Banner.webp"
                alt="Featured showcase image for The Nook Market project."
                className="w-full rounded-3xl mb-16"
            />

            <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 mb-16 hover:border-[#A67C52]/30 transition duration-500">

                <h2
                    className="text-3xl mb-6"
                    style={{ fontFamily: "Cinzel, serif" }}
                >
                    Project Overview
                </h2>

                <p className="text-zinc-300 leading-relaxed">
                    The Nook Market is a fantasy-inspired auction platform created as
                    part of Semester Project 2. Users can browse listings, place bids,
                    create their own auctions, and manage their profiles through the
                    Noroff Auction API.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">


                <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#A67C52]/30 transition duration-500">

                    <h2 className="text-2xl mb-6">Technologies Used</h2>

                    <div className="flex flex-wrap gap-3">

                        <span className="px-4 py-2 rounded-full border border-[#A67C52]/40">
                            HTML5
                        </span>

                        <span className="px-4 py-2 rounded-full border border-[#A67C52]/40">
                            Bootstrap Sass
                        </span>

                        <span className="px-4 py-2 rounded-full border border-[#A67C52]/40">
                            JavaScript
                        </span>

                        <span className="px-4 py-2 rounded-full border border-[#A67C52]/40">
                            Noroff Auction API
                        </span>

                        <span className="px-4 py-2 rounded-full border border-[#A67C52]/40">
                            GitHub
                        </span>

                    </div>
                </div>

                <div className="bg-[#111018] border border-white/10 rounded-3xl p-8 hover:border-[#A67C52]/30 transition duration-500">

                    <h2 className="text-2xl mb-6">Improvements Made</h2>

                    <ul className="space-y-4 text-zinc-300">

                        <li>✓ Improved responsive layouts</li>

                        <li>✓ Enhanced visual consistency across pages</li>

                        <li>✓ Refined user interface styling</li>

                        <li>✓ Improved project documentation</li>

                    </ul>

                </div>

            </div>

            <div className="bg-[#111018] border border-[#A67C52]/20 rounded-3xl p-8 mb-16 hover:border-[#A67C52]/30 transition duration-500">

                <h2 className="text-3xl mb-6">Future Improvements</h2>

                <div className="space-y-4 text-zinc-300">

                    <div>→ Add advanced search and filtering</div>

                    <div>→ Improve accessibility further</div>

                    <div>→ Add richer user notifications</div>

                </div>

            </div>

            <div className="flex gap-4 flex-wrap">
                <a
                    href="https://elegant-lebkuchen-c4df9d.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-[#A67C52] text-[#E8E1D9] uppercase tracking-[0.3em] text-xs hover:bg-[#A67C52] hover:text-black transition duration-500"
                >
                    Visit Live Site
                </a>

                <a
                    href="https://github.com/FrontEndExplorer-90/SP2-Nook-Market.git"
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
