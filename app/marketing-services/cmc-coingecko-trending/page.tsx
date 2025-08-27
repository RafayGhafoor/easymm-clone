import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CMCCoinGeckoTrendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          Get Trending on CMC & CoinGecko
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fadeIn">
          Dominate the charts. Gain visibility. Attract investors. We help crypto projects trend on CoinMarketCap &
          CoinGecko with real traction, smart tactics, and high-impact growth strategies.
        </p>
        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto mx-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          🔥 Boost My Coin Now <ArrowRight size={18} />
        </Link>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Your Shortcut to Visibility.
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Trending on CMC or CG isn’t just hype—it’s a signal. It drives volume, grows your holders, and puts your
            project on every investor’s radar.
          </p>
          <p className="text-xl text-gray-300">We make it happen. Ethically, effectively, and at scale.</p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🧩 Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📊 CMC & CoinGecko Trending Campaigns",
                description:
                  "Get your coin into the Top Gainers, Recently Added, or Most Viewed sections—organically and strategically.",
              },
              {
                title: "🧠 Smart Voter & Watchlist Boosts",
                description: "Increase watchlist numbers and social metrics with targeted, human-powered campaigns.",
              },
              {
                title: "🔄 Volume Amplification",
                description:
                  "Boost real trading volume with strategic partner exchanges and legitimate liquidity tactics.",
              },
              {
                title: "📢 Social Proof & Hype Support",
                description:
                  "Thread drops, influencer push, Reddit/Twitter/Telegram buzz—get eyes on your project, fast.",
              },
              {
                title: "📜 CMC/CG Listing Support",
                description:
                  "Need help getting listed first? We assist with fast-track submission, formatting, and follow-ups.",
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

      {/* Why Projects Work With Us */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              🧠 Why Projects Work With Us
            </h2>
          </div>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> 7+ Years in Web3 Marketing
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> 100+ Successful Trending Campaigns
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Manual & Organic Boosting (No Bots, No Black Hat)
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-400 mr-3" /> Trusted by Top Crypto Projects
            </li>
          </ul>
          <p className="text-center text-2xl font-semibold italic text-purple-400 mt-10">
            “Getting on CMC’s front page was a game-changer. They made it happen in days.”
          </p>
        </div>
      </section>

      {/* Client Wins (Optional Metrics Section) */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🏆 Client Wins
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700">
              <p className="text-4xl font-bold text-green-400 mb-2">🚀 $3.5M+</p>
              <p className="text-gray-400">in capital raised post-trending</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700">
              <p className="text-4xl font-bold text-blue-400 mb-2">👀 10K+</p>
              <p className="text-gray-400">new watchlists added in 72 hours</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700">
              <p className="text-4xl font-bold text-purple-400 mb-2">🔥 Top 5</p>
              <p className="text-gray-400">in CoinGecko Trending — twice in 1 week</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700">
              <p className="text-4xl font-bold text-amber-400 mb-2">📈 200% avg.</p>
              <p className="text-gray-400">spike in daily volume during campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 animate-gradient">
            Ready to Trend? Let’s Make Your Coin Unmissable.
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 animate-fadeIn">
            Get your project the visibility it deserves—without fake bots or wasted time.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-md inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
          >
            🔥 Boost My Coin Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
