import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MarketMakingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          Market Making Services
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeIn">
          Our advanced AI-based market making services ensure high-quality liquidity and optimal trading conditions.
        </p>
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Link
            href="/market-making-services/ai-based-liquidity-providing-market-making"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              AI based high-quality liquidity providing & market making service
            </h3>
            <p className="text-gray-400">Leverage cutting-edge AI for superior liquidity and market depth.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
