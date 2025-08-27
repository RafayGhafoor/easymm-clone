import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ListingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
          Listing Services
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeIn">
          Our expert team assists with exchange listings to boost your project's accessibility and liquidity.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link
            href="/listing-services/top-tier-cex-listing"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Top Tier CEX Listing</h3>
            <p className="text-gray-400">Secure listings on the most reputable centralized exchanges.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/listing-services/medium-tier-cex-listing"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Medium Tier CEX Listing</h3>
            <p className="text-gray-400">Expand your reach with listings on growing and active exchanges.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/listing-services/low-budget-cex-listing"
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Low-Budget CEX Listing</h3>
            <p className="text-gray-400">Cost-effective solutions for initial exchange presence.</p>
            <ArrowRight className="mt-4 h-6 w-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
