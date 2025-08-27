import Link from "next/link"

export default function MediumTierCEXListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          Get Listed. Get Discovered. Grow Fast.
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We help crypto projects list on top-performing medium-tier exchanges like MEXC, Gate.io, Bitmart, Bitget &
          more — opening the door to global volume, new investors, and CEX credibility.
        </p>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">💡 Why Medium-Tier Listings Matter</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Not ready for Binance (yet)? No problem. Medium-tier exchanges offer:
          </p>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <li>✅ Millions of active traders</li>
            <li>✅ High daily volume</li>
            <li>✅ Easy token access for retail</li>
            <li>✅ Real CEX presence and exposure</li>
          </ul>
          <p className="text-lg text-gray-300 leading-relaxed">
            These exchanges are the launchpad to the majors — and we help you get there smoothly, strategically, and
            professionally.
          </p>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">🛠️ Our Services</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <span className="font-semibold text-white">📈 Exchange Listing Management</span>
              <br />
              We handle the entire listing process — outreach, negotiation, onboarding, and listing timelines.
            </li>
            <li>
              <span className="font-semibold text-white">📄 Document & Compliance Prep</span>
              <br />
              From tokenomics to pitch decks, we ensure your project is CEX-ready and professional.
            </li>
            <li>
              <span className="font-semibold text-white">🧠 Listing Strategy & Guidance</span>
              <br />
              Which exchange first? How to time it? What pricing should you expect? We walk you through every detail.
            </li>
            <li>
              <span className="font-semibold text-white">📢 PR + Community Support</span>
              <br />
              Once you're listed, we help you amplify the news, build hype, and activate your trading community.
            </li>
            <li>
              <span className="font-semibold text-white">🚀 Multi-CEX Campaigns</span>
              <br />
              Want to list on 2–3 exchanges at once? We can coordinate a synchronized launch strategy for max exposure.
            </li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-green-400">💼 Exchanges We Work With</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>MEXC</li>
            <li>BingX</li>
            <li>Poloniex</li>
            <li>BitMart</li>
            <li>XT.com</li>
            <li>Whitebit</li>
            <li>Ascendex</li>
            <li>Digifinex</li>
            <li>LBank</li>
            <li>ProBit</li>
            <li>and other growing global platforms</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🏆 Why Choose Us?</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li>✅ 3+ Years in Exchange Relations</li>
            <li>✅ Direct Connections — No Middlemen</li>
            <li>✅ Transparent Fees & Timeline</li>
            <li>✅ Personalized Guidance From Day One</li>
          </ul>
        </div>

        <div className="mt-20">
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
