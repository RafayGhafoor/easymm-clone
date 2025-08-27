import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MarketingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          Marketing Services
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeIn">
          Explore our comprehensive suite of marketing services designed to elevate your crypto project.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            href="/marketing-services/influencer-marketing"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Influencer Marketing</h3>
            <p className="text-gray-400">Tap into trusted voices to spark hype and drive real results.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/marketing-services/pr-marketing"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">PR Marketing</h3>
            <p className="text-gray-400">Craft powerful PR campaigns that cut through the noise.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/marketing-services/cmc-coingecko-trending"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">CMC & CoinGecko Trending</h3>
            <p className="text-gray-400">Dominate the charts and attract investors.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/marketing-services/dexscreener-dextools-trending-ads"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Dexscreener/DexTools Trending and Ads</h3>
            <p className="text-gray-400">Boost your visibility on leading DEX tools.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/marketing-services/crypto-com-trending-ads"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Crypto.com Trending and Ads</h3>
            <p className="text-gray-400">Get featured on Crypto.com for massive exposure.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
