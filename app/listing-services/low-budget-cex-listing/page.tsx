import Link from "next/link"

export default function LowBudgetCEXListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Get Listed Without Breaking the Bank.
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We help small-cap and startup crypto projects get listed on affordable, high-visibility exchanges — fast,
          legit, and founder-friendly.
        </p>

        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 mb-16"
        >
          💸 Start Listing Today
        </Link>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">💡 Why Low-Budget Exchanges Matter</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Not every project starts with VC backing — and that's okay. Low-cost exchanges offer:
          </p>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <li>✅ Access to thousands of global traders</li>
            <li>✅ Real-time chart listings (like CoinMarketCap & CoinGecko)</li>
            <li>✅ Trust-building exposure for new communities</li>
            <li>✅ A stepping stone to bigger listings later</li>
          </ul>
          <p className="text-lg text-gray-300 leading-relaxed">We make it possible — even with tight budgets.</p>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">🛠️ Our Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">📍 Budget-Friendly CEX Listings</h3>
              <p className="text-lg text-gray-300 mb-3">We help you list on reliable, smaller exchanges like:</p>
              <ul className="space-y-1 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li>Coinsbit</li>
                <li>Azbit</li>
                <li>IndoEx</li>
                <li>Latoken</li>
                <li>Finexbox</li>
                <li>Biconomy and more</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">📄 Listing Prep Made Easy</h3>
              <p className="text-lg text-gray-300">
                From token data to listing documents, we help you get everything sorted without stress.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">📣 Basic PR + Social Announcements</h3>
              <p className="text-lg text-gray-300">
                We'll help you announce your listing, generate attention, and drive first-phase volume.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">🤝 One-on-One Founder Support</h3>
              <p className="text-lg text-gray-300">
                You're not just a number. We work directly with your team to make sure it's smooth, simple, and
                successful.
              </p>
            </div>
          </div>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-green-400">🏆 Why Choose Us?</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>✅ Fast Turnaround (as quick as 5–10 days)</li>
            <li>✅ Prices starting under $1,000</li>
            <li>✅ No fluff, no hidden fees</li>
            <li>✅ Ideal for Meme Coins, Utility Tokens, and Early Launches</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🚀 Who We Help</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>🔥 Meme coins & stealth launches</li>
            <li>💎 Early-stage utility tokens</li>
            <li>🌱 Projects with grassroots funding</li>
            <li>🛠️ Builders who need a real starting point</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            🎯 Low Budget. Big Opportunity.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's get your token listed and visible — even if you're just getting started.
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
