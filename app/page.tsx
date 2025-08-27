"use client"

import Link from "next/link"
import {
  ArrowRight,
  Users,
  Target,
  Megaphone,
  Building,
  Bot,
  MessageCircle,
  Star,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/config/site"
import { CountUp } from "@/components/count-up"
import { AnimatedGradient } from "@/components/animated-gradient"
import { ServiceModal } from "@/components/service-modal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{siteConfig.name.charAt(0)}</span>
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {siteConfig.name}
                </span>
                <div className="text-xs text-gray-400 font-medium">Crypto Growth Partner</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("marketing-services")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Marketing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("listing-services")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Listings
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("market-making-services")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Market Making
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("social-media-management")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group"
              >
                Social Media
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("contact-us")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 font-semibold transform hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("marketing-services")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-medium"
                >
                  Marketing Services
                </button>
                <button
                  onClick={() => scrollToSection("listing-services")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-medium"
                >
                  Listing Services
                </button>
                <button
                  onClick={() => scrollToSection("market-making-services")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-medium"
                >
                  Market Making
                </button>
                <button
                  onClick={() => scrollToSection("social-media-management")}
                  className="text-gray-300 hover:text-white transition-colors text-left font-medium"
                >
                  Social Media
                </button>
                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-left"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 md:py-40 relative mt-20">
        <AnimatedGradient className="absolute inset-0 -z-10 opacity-30" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full text-blue-300 font-semibold mb-10 border border-blue-700/50 animate-fadeIn backdrop-blur-sm text-lg">
            ✨ Your Complete Crypto Growth Partner
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient leading-tight">
            Elevate Your Crypto Project
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto animate-fadeIn leading-relaxed">
            From trending campaigns to exchange listings, market making to social media management — we're your one-stop
            solution for crypto project success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button
              onClick={() => scrollToSection("contact-us")}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-2xl flex items-center justify-center gap-4 w-full sm:w-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 text-xl font-bold"
            >
              Get Started Today <ArrowRight size={24} />
            </button>
            <button
              onClick={() => scrollToSection("marketing-services")}
              className="bg-slate-800/80 border border-slate-600 px-12 py-6 rounded-2xl w-full sm:w-auto hover:bg-slate-700/80 transition-all duration-300 backdrop-blur-sm text-xl font-bold"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-24 relative max-w-6xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Crypto Growth Dashboard Mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="relative h-full p-8 flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                {/* Marketing Stats */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Marketing ROI</h3>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">+340%</div>
                  <p className="text-gray-400">Average campaign performance</p>
                </div>

                {/* Listing Success */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Exchange Listings</h3>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                  <p className="text-gray-400">Successful listings completed</p>
                </div>

                {/* Market Making */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Volume Generated</h3>
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$250M+</div>
                  <p className="text-gray-400">Through market making</p>
                </div>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 py-20 border-y border-slate-700 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-400 flex justify-center mb-3">
                $<CountUp end={250} duration={2.5} />
                M+
              </div>
              <p className="text-gray-400 text-xl">Trading Volume Generated</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 flex justify-center mb-3">
                <CountUp end={150} duration={2} />+
              </div>
              <p className="text-gray-400 text-xl">Successful Projects</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-purple-400 flex justify-center mb-3">
                <CountUp end={99.9} decimals={1} duration={2.5} />%
              </div>
              <p className="text-gray-400 text-xl">Client Satisfaction</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 flex justify-center mb-3">
                <CountUp end={50} duration={2.5} />+
              </div>
              <p className="text-gray-400 text-xl">Exchange Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section id="marketing-services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Marketing Services
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive marketing solutions designed to elevate your crypto project and drive measurable results in
              the competitive Web3 landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Influencer Marketing */}
            <ServiceModal
              title="Influencer Marketing"
              subtitle="Supercharge Your Crypto Project with Influencer-Driven Growth"
              icon="🚀"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Influencer Marketing</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Connect with top-tier crypto influencers to amplify your project's reach and build authentic
                    community trust.
                  </p>
                  <div className="flex items-center text-green-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">🎯 Strategic Influencer Campaigns</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design end-to-end influencer campaigns tailored to your specific goals—whether it's brand
                    awareness, community growth, or driving conversions. Our strategic approach ensures maximum ROI from
                    every collaboration.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">📲 Curated Creator Network</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Access our exclusive network of verified crypto influencers across X (Twitter), YouTube, TikTok,
                    Telegram, and emerging platforms. We match your project with creators who align with your values and
                    audience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">📈 Performance-Driven Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every campaign is tracked, analyzed, and optimized for maximum impact. We provide detailed
                    performance reports showing engagement rates, reach, conversions, and true ROI metrics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">🔥 Viral Content Creation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From trending memes to educational threads, live AMAs to exclusive reveals—we create content that
                    resonates with the crypto community and drives organic engagement.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-3">Recent Success Stories:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 🚀 Generated 2.5M impressions for DeFi protocol launch</li>
                    <li>• 📈 Increased community size by 400% in 30 days</li>
                    <li>• 💰 Drove $1.2M in trading volume through influencer campaigns</li>
                    <li>• 🎯 Achieved 15% conversion rate on presale campaigns</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>

            {/* PR Marketing */}
            <ServiceModal
              title="PR & Media Relations"
              subtitle="Your Story. Our Strategy. Global Crypto Reach."
              icon="📰"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Megaphone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">PR & Media Relations</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Craft compelling narratives and secure premium media coverage in top-tier crypto and mainstream
                    publications.
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">📰 Premium Media Placement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get featured in industry-leading publications including Cointelegraph, CoinDesk, Decrypt, Yahoo
                    Finance, and mainstream media outlets. Our established relationships ensure quality coverage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">📣 Professional Press Releases</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Expertly crafted press releases that capture attention and communicate your project's value
                    proposition clearly. We handle distribution across 500+ media outlets and news wires.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">🎤 Thought Leadership Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Position your team as industry experts through bylined articles, podcast interviews, conference
                    speaking opportunities, and strategic social media presence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-3">🛡️ Crisis Communication</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Proactive reputation management and crisis communication strategies to protect and enhance your
                    project's public image during challenging times.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-3">Media Coverage Examples:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 📺 Secured prime-time CNBC interview for CEO</li>
                    <li>• 📰 Featured on Cointelegraph front page 3x in Q4</li>
                    <li>• 🎙️ Booked 15+ podcast appearances on top crypto shows</li>
                    <li>• 📊 Generated 50M+ media impressions across campaigns</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>

            {/* Trending Services */}
            <ServiceModal
              title="Trending & Visibility"
              subtitle="Dominate the Charts. Get Discovered. Drive Volume."
              icon="📈"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-yellow-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Trending & Visibility</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Get trending on major platforms like CoinMarketCap, CoinGecko, DexTools, and Crypto.com to maximize
                    visibility.
                  </p>
                  <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">🚀 CoinMarketCap & CoinGecko Trending</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Strategic campaigns to get your token trending on the world's most visited crypto data platforms.
                    We've helped projects achieve Top 5 trending status, resulting in massive visibility boosts.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-green-400 font-bold">$3.5M+</p>
                      <p className="text-gray-400">Capital raised post-trending</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-blue-400 font-bold">10K+</p>
                      <p className="text-gray-400">New watchlists in 72hrs</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">🔥 DexTools & Dexscreener Trending</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dominate the DEX trending charts where serious traders discover new opportunities. Our campaigns
                    have consistently achieved Top 10 global trending status.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-purple-400 font-bold">15K+</p>
                      <p className="text-gray-400">Dexscreener views in 3 days</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <p className="text-amber-400 font-bold">220%</p>
                      <p className="text-gray-400">Avg volume increase</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">💎 Crypto.com Trending</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Elite exchange exposure on one of the world's largest crypto platforms. Get featured in Top Gainers,
                    Trending, and Popular Pairs sections.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 Why Trending Matters:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 👀 Instant visibility to millions of active traders</li>
                    <li>• 📊 Significant increase in trading volume and liquidity</li>
                    <li>• 🚀 Enhanced credibility and social proof</li>
                    <li>• 💰 Higher probability of attracting institutional interest</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Listing Services Section */}
      <section id="listing-services" className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              Exchange Listing Services
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional exchange listing services to boost your project's accessibility, liquidity, and global reach
              across all tiers of exchanges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Top Tier CEX */}
            <ServiceModal
              title="Top-Tier CEX Listing"
              subtitle="List Your Token on Elite Exchanges — The Right Way"
              icon="🏆"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Top-Tier CEX Listing</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Get listed on world-class exchanges like Binance, Coinbase, OKX, and Bybit with our proven
                    strategies and connections.
                  </p>
                  <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">💼 Elite Exchange Access</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain direct relationships with listing teams at Binance, Coinbase, OKX, Bybit, KuCoin, and
                    other tier-1 exchanges. Our track record speaks for itself with 50+ successful top-tier listings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">📋 Comprehensive Due Diligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We prepare your project for the rigorous due diligence process, ensuring all legal, technical, and
                    compliance requirements are met before submission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">🎯 Strategic Positioning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our team crafts compelling narratives and positioning strategies that highlight your project's
                    unique value proposition to exchange decision-makers.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-3">🏆 Why Projects Trust Us:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ✅ 50+ Successful Top-Tier Listings</li>
                    <li>• ✅ Direct Relationships with Exchange Teams</li>
                    <li>• ✅ 95% Success Rate for Qualified Projects</li>
                    <li>• ✅ Average 6-8 Week Timeline</li>
                    <li>• ✅ Full Compliance and Legal Support</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">📈 Expected Outcomes:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 💰 10-50x increase in daily trading volume</li>
                    <li>• 🌍 Access to millions of global traders</li>
                    <li>• 🚀 Enhanced project credibility and legitimacy</li>
                    <li>• 📊 Improved price discovery and liquidity</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>

            {/* Medium Tier CEX */}
            <ServiceModal
              title="Medium-Tier CEX Listing"
              subtitle="Get Listed. Get Discovered. Grow Fast."
              icon="🚀"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Medium-Tier CEX Listing</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Access high-volume exchanges like MEXC, Gate.io, Bitmart, and Bitget to expand your global reach
                    effectively.
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">🎯 Strategic Exchange Selection</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We help you choose the right medium-tier exchanges based on your target audience, geographic focus,
                    and trading volume goals. Our portfolio includes MEXC, Gate.io, Bitmart, Bitget, and 20+ other
                    quality exchanges.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">⚡ Fast-Track Listing Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Streamlined listing process with average timelines of 2-4 weeks. We handle all documentation,
                    technical integration, and communication with exchange teams.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">💰 Cost-Effective Growth</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Medium-tier exchanges offer excellent ROI with lower listing fees while still providing access to
                    millions of active traders and significant daily volume.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-3">📊 Exchange Benefits:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-green-400 font-bold">5M+</p>
                      <p className="text-gray-400">Active traders per exchange</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold">$100M+</p>
                      <p className="text-gray-400">Daily trading volume</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold">100+</p>
                      <p className="text-gray-400">Countries supported</p>
                    </div>
                    <div>
                      <p className="text-amber-400 font-bold">24/7</p>
                      <p className="text-gray-400">Global trading access</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">🚀 Perfect For:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 🎯 Projects seeking rapid market expansion</li>
                    <li>• 💡 DeFi protocols looking for CEX exposure</li>
                    <li>• 🌟 Established tokens ready to scale globally</li>
                    <li>• 📈 Projects with proven traction and community</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>

            {/* Low Budget CEX */}
            <ServiceModal
              title="Budget-Friendly CEX Listing"
              subtitle="Get Listed Without Breaking the Bank"
              icon="💎"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/10 hover:shadow-lg group cursor-pointer h-full">
                  <div className="h-20 w-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Budget-Friendly CEX</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    Affordable listing solutions for startups and small-cap projects looking to establish CEX presence
                    quickly.
                  </p>
                  <div className="flex items-center text-green-400 font-semibold group-hover:gap-3 transition-all duration-300 text-lg">
                    Learn More <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">💰 Affordable Entry Point</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Starting from under $1,000, our budget-friendly listing services help early-stage projects establish
                    their first CEX presence without massive upfront investment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">⚡ Lightning-Fast Turnaround</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get listed in as little as 5-10 days. Perfect for projects that need quick market access or are
                    launching time-sensitive campaigns.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">🎯 Startup-Friendly Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We understand the challenges facing new projects. Our streamlined process requires minimal
                    documentation while still ensuring compliance and legitimacy.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-lg font-bold text-white mb-3">✨ What You Get:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ✅ Fast Turnaround (5–10 days)</li>
                    <li>• ✅ Transparent Pricing (No Hidden Fees)</li>
                    <li>• ✅ Multiple Exchange Options</li>
                    <li>• ✅ Technical Integration Support</li>
                    <li>• ✅ Post-Listing Marketing Guidance</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">🎯 Ideal For:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 🚀 Meme coins and community tokens</li>
                    <li>• 💡 Early-stage DeFi projects</li>
                    <li>• 🎮 Gaming and NFT tokens</li>
                    <li>• 🌟 Projects with limited initial budgets</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Market Making Services Section */}
      <section id="market-making-services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-blue-900/10 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Market Making Services
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered market making services that provide deep liquidity, tight spreads, and optimal trading
              conditions for your token.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ServiceModal
              title="AI-Based Liquidity & Market Making"
              subtitle="AI-Powered Liquidity That Moves Markets — Not Just Numbers"
              icon="🤖"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-16 rounded-3xl shadow-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-lg group cursor-pointer">
                  <div className="text-center mb-10">
                    <div className="h-24 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-white">AI-Based Market Making</h3>
                    <p className="text-gray-400 text-xl leading-relaxed">
                      Intelligent liquidity solutions powered by advanced algorithms that adapt to market conditions in
                      real-time.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-3">60%</div>
                      <p className="text-gray-400 text-lg">Average Spread Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-3">5x</div>
                      <p className="text-gray-400 text-lg">Deeper Order Books</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center text-cyan-400 font-semibold text-xl group-hover:gap-3 transition-all duration-300">
                      Explore Our Technology <ArrowRight size={24} className="ml-2" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">🤖 What Makes Us Different?</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    <span className="font-semibold text-white">Smart Liquidity. Real Results.</span>
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our proprietary AI-driven systems continuously analyze market conditions, order flow patterns, and
                    volatility metrics to provide optimal liquidity across multiple exchanges simultaneously. Unlike
                    traditional market makers, our algorithms adapt in real-time to changing market dynamics.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-3">🎯 Advanced Algorithm Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Real-time spread optimization</li>
                      <li>• Dynamic order book management</li>
                      <li>• Cross-exchange arbitrage detection</li>
                      <li>• Volatility-adjusted positioning</li>
                      <li>• Anti-manipulation safeguards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-3">📊 Performance Metrics</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 99.9% uptime across all markets</li>
                      <li>• Sub-millisecond order execution</li>
                      <li>• 24/7 global market coverage</li>
                      <li>• Real-time risk management</li>
                      <li>• Transparent reporting dashboard</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-bold text-white mb-4">🚀 Expected Results</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
                      <p className="text-gray-400 text-sm">Spread Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">3-5x</div>
                      <p className="text-gray-400 text-sm">Order Book Depth</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                      <p className="text-gray-400 text-sm">Market Coverage</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">40%</div>
                      <p className="text-gray-400 text-sm">Volume Increase</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-purple-400 mb-3">🔒 Compliance & Security</h4>
                  <p className="text-gray-300 leading-relaxed">
                    All our market making activities are fully compliant with regulatory requirements. We employ
                    sophisticated risk management systems and maintain complete transparency with detailed reporting and
                    audit trails.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">💡 Why Choose Our Market Making?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 🧠 AI-powered decision making, not simple bots</li>
                    <li>• 🌍 Multi-exchange coverage (CEX & DEX)</li>
                    <li>• 📈 Proven track record with 100+ tokens</li>
                    <li>• 🛡️ Institutional-grade risk management</li>
                    <li>• 📊 Real-time analytics and reporting</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Social Media Management Section */}
      <section id="social-media-management" className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Social Media Management
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional Twitter and Telegram management services that build authentic communities and drive
              meaningful engagement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ServiceModal
              title="Twitter & Telegram Management"
              subtitle="Build Hype. Grow Trust. Engage Like a Pro."
              icon="📱"
              triggerContent={
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-16 rounded-3xl shadow-xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-pink-500/10 hover:shadow-lg group cursor-pointer">
                  <div className="text-center mb-10">
                    <div className="h-24 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-white">Social Media Management</h3>
                    <p className="text-gray-400 text-xl leading-relaxed">
                      Comprehensive Twitter and Telegram management that builds authentic communities and drives real
                      engagement.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-600">
                      <h4 className="text-xl font-bold text-blue-400 mb-4">🐦 Twitter Management</h4>
                      <p className="text-gray-400 text-lg">
                        Daily content, community engagement, and strategic growth campaigns.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-600">
                      <h4 className="text-xl font-bold text-green-400 mb-4">💬 Telegram Management</h4>
                      <p className="text-gray-400 text-lg">
                        24/7 moderation, community building, and member engagement.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center text-pink-400 font-semibold text-xl group-hover:gap-3 transition-all duration-300">
                      Discover Our Approach <ArrowRight size={24} className="ml-2" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-8 rounded-xl border border-blue-500/30">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">🐦</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Twitter Management</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">📝 Content Strategy</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Daily tweets, threads, and viral content</li>
                          <li>• Trend-jacking and Web3 meme creation</li>
                          <li>• Educational content and thought leadership</li>
                          <li>• Community polls and interactive content</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">🚀 Growth Tactics</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Strategic hashtag optimization</li>
                          <li>• Influencer collaboration and mentions</li>
                          <li>• Community engagement campaigns</li>
                          <li>• Giveaways and contest management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-8 rounded-xl border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">💬</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Telegram Management</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">🛡️ Community Moderation</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• 24/7 active moderation and support</li>
                          <li>• Anti-spam and anti-FUD protection</li>
                          <li>• Custom bot setup and management</li>
                          <li>• Multilingual moderation support</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">🎯 Engagement Strategy</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Regular AMA sessions and events</li>
                          <li>• Community challenges and rewards</li>
                          <li>• News updates and announcements</li>
                          <li>• Member onboarding and retention</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">
                    🌟 Why Projects Choose Our Social Media Management
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">W3</span>
                      </div>
                      <p className="text-gray-300 font-semibold">Web3-Native Team</p>
                      <p className="text-gray-400 text-sm">Deep crypto knowledge</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">24</span>
                      </div>
                      <p className="text-gray-300 font-semibold">24/7 Coverage</p>
                      <p className="text-gray-400 text-sm">Global time zones</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">🎯</span>
                      </div>
                      <p className="text-gray-300 font-semibold">Real Engagement</p>
                      <p className="text-gray-400 text-sm">Authentic interactions</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">📊</span>
                      </div>
                      <p className="text-gray-300 font-semibold">Data-Driven</p>
                      <p className="text-gray-400 text-sm">Analytics & insights</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/30">
                  <h4 className="text-lg font-bold text-white mb-3">📈 Typical Results:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-pink-400">300%</p>
                      <p className="text-gray-400 text-sm">Follower Growth</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-400">500%</p>
                      <p className="text-gray-400 text-sm">Engagement Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">24/7</p>
                      <p className="text-gray-400 text-sm">Community Activity</p>
                    </div>
                  </div>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 animate-gradient leading-tight">
              Ready to Transform Your Crypto Project?
            </h2>
            <p className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto text-gray-300 animate-fadeIn leading-relaxed">
              Join hundreds of successful projects that trust {siteConfig.name} for their growth, listings, and market
              making needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button
                onClick={() => scrollToSection("contact-us")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-2xl inline-flex items-center justify-center gap-4 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn text-xl font-bold"
              >
                Get Started Today <ArrowRight size={24} />
              </button>
              <button
                onClick={() => scrollToSection("marketing-services")}
                className="bg-slate-800/80 border border-slate-600 px-12 py-6 rounded-2xl hover:bg-slate-700/80 transition-all duration-300 backdrop-blur-sm text-xl font-bold"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-32 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Ready to take your crypto project to the next level? Our team of experts is here to help you succeed in
              the competitive Web3 landscape.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700">
                <div className="h-20 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl">📧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-gray-400 mb-6 text-lg">Get in touch for detailed discussions</p>
                <Link
                  href="mailto:info@easymm.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg"
                >
                  info@easymm.com
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700">
                <div className="h-20 w-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Telegram</h3>
                <p className="text-gray-400 mb-6 text-lg">Quick responses and support</p>
                <Link
                  href="https://t.me/easymm_support"
                  className="text-green-400 hover:text-green-300 transition-colors font-semibold text-lg"
                >
                  @easymm_support
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-slate-700">
                <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <span className="text-4xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
                <p className="text-gray-400 mb-6 text-lg">Direct consultation calls</p>
                <Link
                  href="tel:+11234567890"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-semibold text-lg"
                >
                  +1 (123) 456-7890
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-10 rounded-3xl border border-slate-600 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6">🚀 Ready to Get Started?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-xl">
                Schedule a free consultation to discuss your project's needs and how we can help you achieve your goals.
              </p>
              <Button
                onClick={() => window.open("mailto:info@easymm.com?subject=Free Consultation Request", "_blank")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl text-xl font-bold"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-14 w-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{siteConfig.name.charAt(0)}</span>
                </div>
                <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">{siteConfig.description}</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <span className="text-xl">🐦</span>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <span className="text-xl">💬</span>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <span className="text-xl">💼</span>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-8 text-white text-xl">Services</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("marketing-services")}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Marketing Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("listing-services")}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Exchange Listings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("market-making-services")}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Market Making
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("social-media-management")}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Social Media Management
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-8 text-white text-xl">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-8 text-white text-xl">Support</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#help" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Help Center
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact-us")}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-gray-400 hover:text-white transition-colors text-lg">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-lg">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-lg">Empowering crypto projects worldwide since 2021</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
