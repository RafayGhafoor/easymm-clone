import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function PRMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          Your Story. Our Strategy. Global Crypto Reach.
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fadeIn">
          We craft powerful PR campaigns that cut through the noise. From token launches to narrative building—get your
          project in front of the people who matter.
        </p>
        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto mx-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          📣 Want to be the next big story in Web3? Get Featured Today! <ArrowRight size={18} />
        </Link>
      </section>

      {/* About Us */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            We Are the Voice Behind the Vision.
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            In a space that moves at the speed of blockchain, visibility is everything. We’re a full-stack crypto PR
            agency built by Web3 natives who live and breathe the industry.
          </p>
          <p className="text-xl text-gray-300">
            Whether you’re launching a DeFi protocol, NFT collection, or Layer 1 chain—we position your project where it
            belongs: front and center.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🛠️ Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📰 Media Placement",
                description:
                  "Get featured in top-tier crypto and mainstream outlets like Cointelegraph, Decrypt, Yahoo Finance, and more.",
              },
              {
                title: "📣 Press Releases",
                description:
                  "Professionally written, perfectly timed. We craft PR that commands attention and delivers credibility.",
              },
              {
                title: "🎤 Thought Leadership",
                description:
                  "Grow your personal or brand voice with bylines, interviews, keynote placements, and social amplification.",
              },
              {
                title: "🌍 Global Exposure",
                description: "Multilingual PR campaigns targeting Asia, EU, US, and LATAM crypto communities.",
              },
              {
                title: "🔥 Crisis Management & Reputation Building",
                description: "FUD? We fight it. We help rebuild trust and steer your brand narrative back on course.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us? */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              ✨ Why Work With Us?
            </h2>
          </div>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> 100+ Successful Web3 Campaigns
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Direct Relationships with Editors & Journalists
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> On-Chain + Off-Chain Narrative Expertise
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Fast Turnarounds, Global Reach
            </li>
          </ul>
          <p className="text-center text-2xl font-semibold italic text-purple-400 mt-10">
            “We don’t just pitch stories. We shape narratives that move markets.”
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 animate-gradient">
            Ready to make headlines?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 animate-fadeIn">
            Let's craft your story and get it in front of the world.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-md inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
          >
            📣 Want to be the next big story in Web3? Get Featured Today! <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
