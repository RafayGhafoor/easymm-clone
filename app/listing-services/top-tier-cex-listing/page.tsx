import Link from "next/link"

export default function TopTierCEXListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          List Your Token on Top-Tier Exchanges — The Right Way.
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          From OKX to Binance, we open the doors. We help crypto projects get listed on world-class exchanges with the
          strategy, network, and reputation it takes to win.
        </p>

        <div className="grid md:grid-cols-2 gap-12 my-16 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-400">💼 About Us</h2>
            <div className="text-lg text-gray-300 leading-relaxed">
              <p className="mb-4 font-semibold text-white">Your Gateway to Global Liquidity.</p>
              <p className="mb-4">
                Getting listed on a major exchange isn't about luck — it's about narrative, timing, and the right people
                behind the scenes.
              </p>
              <p>
                We're a boutique Web3 advisory and listing agency with deep CEX connections, real experience, and a
                no-BS approach. Whether you're a rising DeFi protocol, an ambitious L2 chain, or the next meme-to-moon
                story—we position your token for success.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">🛠️ What We Offer</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>
                <span className="font-semibold text-white">📍 Exchange Listing Advisory</span>
                <br />
                We guide you through the full process—from pitch deck to tokenomics to exchange negotiations.
              </li>
              <li>
                <span className="font-semibold text-white">🔐 CEX Relationship Management</span>
                <br />
                Access our direct contacts at Binance, OKX, KuCoin, HTX, Gate.io, Birfinex, Bitget, and more.
              </li>
              <li>
                <span className="font-semibold text-white">📈 Pre-Listing Strategy & Positioning</span>
                <br />
                We help you build narrative, community, and traction so exchanges take notice.
              </li>
              <li>
                <span className="font-semibold text-white">📢 PR + Media Amplification</span>
                <br />
                We boost your visibility with coordinated press, influencer buzz, and due diligence-ready credibility.
              </li>
              <li>
                <span className="font-semibold text-white">🚀 Post-Listing Growth Support</span>
                <br />
                Listings are just the beginning—we help you sustain hype, volume, and community after the green light.
              </li>
            </ul>
          </div>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-green-400">🏆 Why Projects Trust Us</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li>✅ 50+ Successful Listings</li>
            <li>✅ Relationships with Top Tier Exchanges</li>
            <li>✅ Strategic, Professional, Confidential</li>
            <li>✅ Built by Web3 Founders for Web3 Founders</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🌍 Exchanges We Work With</h2>
          <p className="text-lg text-gray-300">
            <span className="font-semibold text-white">Top Tier:</span> Binance, Coinbase, OKX, HTX, KuCoin
          </p>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-red-400">💬 Who It's For</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li>Projects with real tech, traction, or community</li>
            <li>Early-stage teams preparing to scale</li>
            <li>Tokens tired of being ignored by Tier 1s</li>
            <li>Founders who want strategy, not spam</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            📞 Let's Open the Right Doors for Your Token.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            No fluff. No fake promises. Just real results, with the network to back it.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            📩 Apply for Listing Support
          </Link>
        </div>
      </div>
    </div>
  )
}
