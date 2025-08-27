import Link from "next/link"

export default function DexscreenerDextoolsTrendingAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Get Trending on DexTools & Dexscreener — Dominate the DEX Hype Cycle
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We put your token at the top of the charts. More views, more volume, more buyers. Let your project ride the
          wave of DEX visibility.
        </p>

        <div className="grid md:grid-cols-2 gap-12 my-16 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-400">🔥 What We Do</h2>
            <div className="text-lg text-gray-300 leading-relaxed">
              <p className="mb-4 font-semibold text-white">We Turn Tokens Into Trending Stories.</p>
              <p className="mb-4">
                In the DEX world, momentum is everything. Trending on DexTools or Dexscreener means thousands of traders
                instantly watching your chart—and jumping in.
              </p>
              <p>We help you hit the radar and stay there with proven tactics that move markets.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-400">🧠 Our Services</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>
                <span className="font-semibold text-white">📊 Trending Campaigns on DEXTools & Dexscreener</span>
                <br />
                Boost your token to the Top Gainers, Hot Pairs, or Most Viewed sections using smart, organic strategies.
              </li>
              <li>
                <span className="font-semibold text-white">👥 Watchlist Growth & Engagement</span>
                <br />
                Human-powered campaigns to grow followers, views, and community interest—no bots, just real traders.
              </li>
              <li>
                <span className="font-semibold text-white">🚀 Volume & Liquidity Coordination</span>
                <br />
                Work with trusted partner communities and exchanges to stimulate healthy trading activity and real
                momentum.
              </li>
              <li>
                <span className="font-semibold text-white">📢 Social & Influencer Push</span>
                <br />
                Get exposure across X (Twitter), Telegram, and Discord with meme drops, influencer callouts, and
                volume-triggered FOMO.
              </li>
              <li>
                <span className="font-semibold text-white">🎯 Chart Optimization Advice</span>
                <br />
                From tax tweaks to LP management, we help ensure your token is built to trend—and stay trending.
              </li>
            </ul>
          </div>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">💡 Why Projects Trust Us</h2>
          <ul className="space-y-4 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li>✅ 7+ Years in DEX Growth Hacking</li>
            <li>✅ Organic & Ethical Trending Tactics</li>
            <li>✅ Real Users, Real Traders, Real Hype</li>
            <li>✅ Results Within 24–72 Hours</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">📊 Real Results</h2>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>🔝 Top 10 on DEXTools Global Pairs in 48 hrs</li>
            <li>👁️ 15K+ Dexscreener views in 3 days</li>
            <li>📈 220% average trading volume increase</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Perfect For:</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <li>Meme Coins</li>
            <li>Fair Launch Projects</li>
            <li>DeFi / Utility Tokens</li>
            <li>Stealth Launches</li>
            <li>Low Cap Gems</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            🎯 Let's Make Your Token Go Viral.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Turn charts into hype. Let us help you trend where it matters.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            📈 Make My Token Trend Now
          </Link>
        </div>
      </div>
    </div>
  )
}
