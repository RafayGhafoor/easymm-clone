import Link from "next/link"

export default function AIBasedLiquidityProvidingMarketMakingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          AI-Powered Liquidity That Moves Markets — Not Just Numbers
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We bring precision, intelligence, and consistency to your token's trading performance. Automated market making
          and deep liquidity solutions tailored for Web3 success.
        </p>

        <Link
          href="/contact-us"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 mb-16"
        >
          🤖 Let's Talk Liquidity
        </Link>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">🤖 What Makes Us Different?</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Smart Liquidity. Real Results. Our AI-driven systems adapt to market conditions in real time — balancing
            spreads, deepening order books, and improving price stability across CEXs and DEXs.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            No spoofing. No wash trades. Just intelligent liquidity that actually works.
          </p>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-purple-400">🛠️ Our Services</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <span className="font-semibold text-white">⚙️ AI-Based Market Making:</span> Our proprietary AI engines
              dynamically adjust orders based on volume, volatility, and sentiment — reducing slippage and tightening
              spreads 24/7.
            </li>
            <li>
              <span className="font-semibold text-white">💧 CEX & DEX Liquidity Provision:</span> From Binance to
              Uniswap, we manage liquidity across multiple platforms using efficient capital deployment and intelligent
              rebalancing.
            </li>
            <li>
              <span className="font-semibold text-white">📈 Order Book Depth & Volume Support:</span> We ensure your
              token looks strong, healthy, and attractive to traders with consistently deep books and active flow.
            </li>
            <li>
              <span className="font-semibold text-white">📊 Data-Driven Strategy Optimization:</span> Every pair is
              monitored and adjusted using live data and machine learning — not guesswork or outdated bots.
            </li>
            <li>
              <span className="font-semibold text-white">🔒 Compliant & Transparent Practices:</span> We follow best
              practices — no fake volume, no reputational risks. Just sustainable growth and investor trust.
            </li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-green-400">🧠 Why Clients Choose Us</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>✅ AI-Enhanced Trading Models</li>
            <li>✅ Multi-CEX & Multi-Chain Support</li>
            <li>✅ Custom Strategies for Every Project</li>
            <li>✅ Transparent Reporting, Real Results</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">📊 Results You Can Expect</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>📉 60% average spread reduction</li>
            <li>💧 3–5x deeper order books</li>
            <li>🔄 24/7 uptime across global markets</li>
            <li>🚀 Improved trader confidence and CEX visibility</li>
          </ul>
        </div>

        <div className="my-16 text-left">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🏦 Perfect For:</h2>
          <ul className="space-y-2 text-lg text-gray-300 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>Tier 1 & Tier 2 Exchange Listings</li>
            <li>Token Launches & IDOs</li>
            <li>Stablecoins & Real-World Asset Tokens</li>
            <li>Cross-chain and DeFi Protocols</li>
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
            AI Liquidity for the Next Generation of Crypto.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let your token trade like a top 100 — with less cost, less risk, and more intelligence.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            🤖 Let's Talk Liquidity
          </Link>
        </div>
      </div>
    </div>
  )
}
