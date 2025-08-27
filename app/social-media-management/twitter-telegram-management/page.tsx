import Link from "next/link"

export default function TwitterTelegramManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Build Hype. Grow Trust. Engage Like a Pro.
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We manage your Twitter & Telegram like a Web3-native brand should — with daily content, real engagement, and
          strategic community growth that drives results.
        </p>

        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 mb-16"
        >
          📲 Get Pro Social Management
        </Link>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">📱 Why Social Media Matters in Web3</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            In crypto, your community is your brand. Twitter builds your voice. Telegram builds your tribe. We make both
            work for you — 24/7.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you're launching a token, growing a DAO, or running an NFT drop, we'll make sure your socials speak
            with purpose, attract attention, and turn lurkers into holders.
          </p>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">🛠️ Our Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">🐦 Twitter Management</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>Daily tweets, threads, and memes that hit</li>
                <li>Thought-leader positioning & organic growth</li>
                <li>Community engagement, polls, giveaways & more</li>
                <li>Trend-jacking & Web3 content strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">💬 Telegram Management</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>Full-time community moderation</li>
                <li>AMA hosting, event planning, and bot setup</li>
                <li>Anti-FUD & spam protection</li>
                <li>Member growth campaigns & retention strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">📊 Weekly Analytics Reports</h3>
              <p className="text-lg text-gray-300">
                Track growth, engagement, sentiment, and campaign results with clean, transparent reporting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">✨ Bonus Add-ons</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>Viral meme + content drops</li>
                <li>Launch day & listing support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-green-400">🌟 Why Projects Choose Us</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>✅ Web3-native team (not just marketers)</li>
            <li>✅ Multilingual Telegram mods available</li>
            <li>✅ Real followers, real conversations</li>
            <li>✅ 24/7 availability for global teams</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">👥 Perfect For:</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>Token Launches & Presales</li>
            <li>NFT Projects</li>
            <li>DeFi / GameFi Protocols</li>
            <li>CEX/DEX Listings</li>
            <li>DAOs and Ecosystem Brands</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            🎯 Let Us Be Your Voice in Web3.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            You build the tech — we build the hype, trust, and tribe.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            📲 Get Pro Social Management
          </Link>
        </div>
      </div>
    </div>
  )
}
