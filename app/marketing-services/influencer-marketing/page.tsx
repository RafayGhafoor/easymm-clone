import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function InfluencerMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          🚀 Supercharge Your Crypto Project with Influencer-Driven Growth
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fadeIn">
          Tap into the power of trusted voices. We connect Web3 brands with top-tier crypto influencers to spark hype,
          build trust, and drive real results.
        </p>
        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto mx-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          👉 Launch Your Campaign Today <ArrowRight size={18} />
        </Link>
      </section>

      {/* About Us / Intro Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Trusted by the Fastest-Growing Projects in Web3
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            We’re a next-gen crypto marketing agency built for the decentralized world. From DeFi to NFTs to GameFi, we
            know the culture, the trends, and the people who move the market.
          </p>
          <p className="text-xl text-gray-300">
            Whether you’re launching a token, boosting your brand, or scaling your community—we help you win attention
            where it matters.
          </p>
        </div>
      </section>

      {/* What We Do (Services Section) */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              What We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "🎯 Influencer Strategy",
                description:
                  "We design end-to-end campaigns tailored to your goals—whether it’s brand awareness, conversions, or community growth.",
              },
              {
                title: "📲 Influencer Network",
                description:
                  "Access our curated network of trusted creators on X (Twitter), YouTube, TikTok, Telegram, and more.",
              },
              {
                title: "📈 Data-Driven Results",
                description: "We don’t just post—we track, optimize, and deliver performance reports with real ROI.",
              },
              {
                title: "🔥 Viral Content Campaigns",
                description:
                  "From meme drops to hype threads to live AMAs, we know how to ignite buzz in the crypto space.",
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

      {/* Why Us? */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              Why Us?
            </h2>
          </div>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> 100% Web3-Native Team
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Proven Campaign ROI
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Flexible Plans for Startups & Giants
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Global Reach with Localized Strategies
            </li>
          </ul>
          <p className="text-center text-2xl font-semibold italic text-purple-400 mt-10">
            “In Web3, attention is the new oil. We help you drill it.”
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 animate-gradient">
            Ready to supercharge your project?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 animate-fadeIn">
            Let's connect and discuss how influencer marketing can drive your growth.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-md inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
          >
            👉 Launch Your Campaign Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
