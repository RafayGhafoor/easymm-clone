import Link from "next/link"

export default function CryptoComTrendingAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Trend on Crypto.com — Unlock Elite Exchange Exposure
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Your project deserves the spotlight. We help tokens trend on Crypto.com with targeted campaigns that drive
          visibility, watchlists, and trading momentum.
        </p>

        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 mb-16"
        >
          📈 Make My Token Trend Now
        </Link>

        <div className="grid md:grid-cols-2 gap-12 my-16 text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-400">🔥 Why Crypto.com Trending Matters</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Trending on Crypto.com isn't just hype — it's high-value attention from millions of verified users. We
              help you hit the Top Gainers, Trending, and Popular Pairs tabs with fully managed campaigns designed to
              maximize real investor interest.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">🛠️ Our Services</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>
                <span className="font-semibold text-white">📊 Trending Campaigns on Crypto.com</span>
                <br />
                Boost your token visibility on the Trending, Gainers, and Most Viewed sections with clean, strategic
                exposure.
              </li>
              <li>
                <span className="font-semibold text-white">👥 Watchlist & Engagement Growth</span>
                <br />
                We build real traction using targeted user engagement campaigns that grow your token's footprint on the
                app and site.
              </li>
              <li>
                <span className="font-semibold text-white">📈 Volume & Price Support</span>
                <br />
                We coordinate with volume-friendly trading communities and market makers to organically support trending
                metrics.
              </li>
              <li>
                <span className="font-semibold text-white">📣 PR & Social Buzz</span>
                <br />
                We amplify your token across Twitter, Telegram, and news outlets to spark momentum from both retail and
                whales.
              </li>
              <li>
                <span className="font-semibold text-white">⚙️ Listing Optimization & Support</span>
                <br />
                We also assist with Crypto.com listing prep if you're not there yet—ensuring your fundamentals are
                trend-ready.
              </li>
            </ul>
          </div>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">💼 Who Is This For?</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li>Projects already listed on Crypto.com</li>
            <li>Tokens looking to stand out from the crowd</li>
            <li>Teams wanting to increase holders & trading volume</li>
            <li>Meme coins, utility tokens, & serious DeFi protocols</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">💡 Why Work With Us?</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>✅ 7+ Years in CEX/DEX Marketing</li>
            <li>✅ Real Metrics, No Bots or Black Hat Tactics</li>
            <li>✅ Quick Turnarounds & Transparent Results</li>
          </ul>
        </div>

        <div className="mt-20">
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
