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
  Sparkles,
} from "lucide-react"
import { useState, useEffect } from "react"
import { siteConfig } from "@/config/site"
import { CountUp } from "@/components/count-up"
import { ServiceModal } from "@/components/service-modal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ultra-Modern Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/80 backdrop-blur-2xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-white font-bold">{siteConfig.name.charAt(0)}</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-semibold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
                <div className="text-xs text-gray-500 font-medium">Crypto Growth Partner</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Marketing", id: "marketing-services" },
                { name: "Listings", id: "listing-services" },
                { name: "Market Making", id: "market-making-services" },
                { name: "Social Media", id: "social-media-management" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white text-sm font-medium relative group transition-all duration-300"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => scrollToSection("contact-us")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium text-sm transform hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  { name: "Marketing Services", id: "marketing-services" },
                  { name: "Listing Services", id: "listing-services" },
                  { name: "Market Making", id: "market-making-services" },
                  { name: "Social Media", id: "social-media-management" },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left font-medium text-sm"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-medium text-sm text-left w-fit mt-2"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-full text-cyan-300 font-medium mb-8 text-sm backdrop-blur-sm">
              <Sparkles size={16} className="text-cyan-400" />
              Your Complete Crypto Growth Partner
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                Elevate Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Crypto Project
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              From trending campaigns to exchange listings, market making to social media management — we're your
              one-stop solution for crypto project success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection("contact-us")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Get Started Today <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("marketing-services")}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Services
              </button>
            </div>

            {/* Apple-style Product Showcase */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative">
                {/* Main Display */}
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Header Bar */}
                  <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-sm text-gray-400 font-mono">EasyMM Dashboard</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {/* Marketing Performance */}
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <TrendingUp size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">Marketing ROI</h3>
                            <p className="text-gray-400 text-xs">Campaign Performance</p>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-400 mb-1">+340%</div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>

                      {/* Exchange Listings */}
                      <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Building size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">Listings</h3>
                            <p className="text-gray-400 text-xs">Successful Projects</p>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-blue-400 mb-1">150+</div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>

                      {/* Volume Generated */}
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                            <Bot size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">Volume</h3>
                            <p className="text-gray-400 text-xs">Generated Trading</p>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">$250M+</div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Live Trading Visualization */}
                    <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white">Live Market Making</h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { pair: "ETH/USDT", spread: "0.02%", color: "from-blue-400 to-blue-600" },
                          { pair: "BTC/USDT", spread: "0.01%", color: "from-orange-400 to-orange-600" },
                          { pair: "SOL/USDT", spread: "0.03%", color: "from-purple-400 to-purple-600" },
                          { pair: "AVAX/USDT", spread: "0.04%", color: "from-red-400 to-red-600" },
                        ].map((item, index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
                            <div className="text-xs text-gray-400 mb-1">{item.pair}</div>
                            <div
                              className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                            >
                              {item.spread}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping opacity-40"></div>
                <div className="absolute -bottom-6 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-300 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 250, suffix: "M+", label: "Trading Volume", color: "text-green-400", icon: "💰" },
              { value: 150, suffix: "+", label: "Successful Projects", color: "text-blue-400", icon: "🚀" },
              {
                value: 99.9,
                suffix: "%",
                label: "Client Satisfaction",
                color: "text-purple-400",
                icon: "⭐",
                decimals: 1,
              },
              { value: 50, suffix: "+", label: "Exchange Partners", color: "text-yellow-400", icon: "🤝" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 flex justify-center`}>
                  {stat.value < 100 ? (
                    <>
                      <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} />
                      {stat.suffix}
                    </>
                  ) : (
                    <>
                      $<CountUp end={stat.value} duration={2.5} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section id="marketing-services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Marketing Services
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive marketing solutions designed to elevate your crypto project and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Influencer Marketing */}
            <ServiceModal
              title="Influencer Marketing"
              subtitle="Supercharge Your Crypto Project with Influencer-Driven Growth"
              icon="🚀"
              triggerContent={
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Influencer Marketing</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Connect with top-tier crypto influencers to amplify your project's reach and build authentic
                      community trust.
                    </p>
                    <div className="flex items-center text-green-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">🎯 Strategic Influencer Campaigns</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We design end-to-end influencer campaigns tailored to your specific goals—whether it's brand
                    awareness, community growth, or driving conversions. Our strategic approach ensures maximum ROI from
                    every collaboration.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-3">📲 Curated Creator Network</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Access our exclusive network of verified crypto influencers across X (Twitter), YouTube, TikTok,
                    Telegram, and emerging platforms. We match your project with creators who align with your values and
                    audience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-3">📈 Performance-Driven Results</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Every campaign is tracked, analyzed, and optimized for maximum impact. We provide detailed
                    performance reports showing engagement rates, reach, conversions, and true ROI metrics.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-white mb-2 text-sm">Recent Success Stories:</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• 🚀 Generated 2.5M impressions for DeFi protocol launch</li>
                    <li>• 📈 Increased community size by 400% in 30 days</li>
                    <li>• 💰 Drove $1.2M in trading volume through campaigns</li>
                    <li>• 🎯 Achieved 15% conversion rate on presales</li>
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
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Megaphone size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">PR & Media Relations</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Craft compelling narratives and secure premium media coverage in top-tier crypto and mainstream
                      publications.
                    </p>
                    <div className="flex items-center text-purple-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-3">📰 Premium Media Placement</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Get featured in industry-leading publications including Cointelegraph, CoinDesk, Decrypt, Yahoo
                    Finance, and mainstream media outlets. Our established relationships ensure quality coverage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-3">📣 Professional Press Releases</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Expertly crafted press releases that capture attention and communicate your project's value
                    proposition clearly. We handle distribution across 500+ media outlets and news wires.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">🎤 Thought Leadership Development</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Position your team as industry experts through bylined articles, podcast interviews, conference
                    speaking opportunities, and strategic social media presence.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-white mb-2 text-sm">Media Coverage Examples:</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• 📺 Secured prime-time CNBC interview for CEO</li>
                    <li>• 📰 Featured on Cointelegraph front page 3x in Q4</li>
                    <li>• 🎙️ Booked 15+ podcast appearances on top shows</li>
                    <li>• 📊 Generated 50M+ media impressions</li>
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
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Trending & Visibility</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Get trending on major platforms like CoinMarketCap, CoinGecko, DexTools, and Crypto.com to
                      maximize visibility.
                    </p>
                    <div className="flex items-center text-yellow-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">🚀 CoinMarketCap & CoinGecko Trending</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Strategic campaigns to get your token trending on the world's most visited crypto data platforms.
                    We've helped projects achieve Top 5 trending status.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-green-400 font-bold text-sm">$3.5M+</p>
                      <p className="text-gray-400 text-xs">Capital raised</p>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-blue-400 font-bold text-sm">10K+</p>
                      <p className="text-gray-400 text-xs">New watchlists</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">🔥 DexTools & Dexscreener</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Dominate the DEX trending charts where serious traders discover new opportunities. Consistent Top 10
                    global trending status.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-white mb-2 text-sm">🎯 Why Trending Matters:</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• 👀 Instant visibility to millions of traders</li>
                    <li>• 📊 Significant volume and liquidity increase</li>
                    <li>• 🚀 Enhanced credibility and social proof</li>
                    <li>• 💰 Higher institutional interest probability</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Listing Services Section */}
      <section id="listing-services" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Exchange Listing Services
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional exchange listing services to boost your project's accessibility, liquidity, and global reach
              across all tiers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Top Tier CEX */}
            <ServiceModal
              title="Top-Tier CEX Listing"
              subtitle="List Your Token on Elite Exchanges — The Right Way"
              icon="🏆"
              triggerContent={
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Building size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Top-Tier CEX</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Get listed on world-class exchanges like Binance, Coinbase, OKX, and Bybit with proven strategies.
                    </p>
                    <div className="flex items-center text-blue-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-3">💼 Elite Exchange Access</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Direct relationships with listing teams at Binance, Coinbase, OKX, Bybit, KuCoin, and other tier-1
                    exchanges. 50+ successful top-tier listings completed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">📋 Comprehensive Due Diligence</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We prepare your project for rigorous due diligence, ensuring all legal, technical, and compliance
                    requirements are met before submission.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-white mb-2 text-sm">🏆 Why Projects Trust Us:</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• ✅ 50+ Successful Top-Tier Listings</li>
                    <li>• ✅ Direct Exchange Relationships</li>
                    <li>• ✅ 95% Success Rate for Qualified Projects</li>
                    <li>• ✅ Average 6-8 Week Timeline</li>
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
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Medium-Tier CEX</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Access high-volume exchanges like MEXC, Gate.io, Bitmart, and Bitget to expand global reach
                      effectively.
                    </p>
                    <div className="flex items-center text-purple-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-3">🎯 Strategic Exchange Selection</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Choose the right medium-tier exchanges based on target audience, geographic focus, and trading
                    volume goals. Portfolio includes MEXC, Gate.io, Bitmart, Bitget, and 20+ others.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">⚡ Fast-Track Process</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Streamlined listing process with average timelines of 2-4 weeks. We handle all documentation,
                    technical integration, and exchange communication.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-white mb-2 text-sm">📊 Exchange Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <p className="text-green-400 font-bold text-sm">5M+</p>
                      <p className="text-gray-400 text-xs">Active traders</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-400 font-bold text-sm">$100M+</p>
                      <p className="text-gray-400 text-xs">Daily volume</p>
                    </div>
                  </div>
                </div>
              </div>
            </ServiceModal>

            {/* Budget CEX */}
            <ServiceModal
              title="Budget-Friendly CEX Listing"
              subtitle="Get Listed Without Breaking the Bank"
              icon="💎"
              triggerContent={
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:scale-[1.02] h-full">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Star size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">Budget-Friendly CEX</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Affordable listing solutions for startups and small-cap projects looking to establish CEX presence
                      quickly.
                    </p>
                    <div className="flex items-center text-green-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-3">💰 Affordable Entry Point</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Starting from under $1,000, budget-friendly listing services help early-stage projects establish
                    their first CEX presence without massive upfront investment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-3">⚡ Lightning-Fast Turnaround</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Get listed in as little as 5-10 days. Perfect for projects needing quick market access or launching
                    time-sensitive campaigns.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-white mb-2 text-sm">✨ What You Get:</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• ✅ Fast Turnaround (5–10 days)</li>
                    <li>• ✅ Transparent Pricing</li>
                    <li>• ✅ Multiple Exchange Options</li>
                    <li>• ✅ Technical Integration Support</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Market Making Services Section */}
      <section id="market-making-services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Market Making Services
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered market making services that provide deep liquidity, tight spreads, and optimal trading
              conditions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ServiceModal
              title="AI-Based Liquidity & Market Making"
              subtitle="AI-Powered Liquidity That Moves Markets"
              icon="🤖"
              triggerContent={
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-12 rounded-3xl hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02]">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Bot size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">AI-Based Market Making</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Intelligent liquidity solutions powered by advanced algorithms that adapt to market conditions
                        in real-time.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-4">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
                        <p className="text-gray-400 text-sm">Average Spread Reduction</p>
                      </div>
                      <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-4">
                        <div className="text-2xl font-bold text-blue-400 mb-1">5x</div>
                        <p className="text-gray-400 text-sm">Deeper Order Books</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center text-cyan-400 font-medium group-hover:gap-2 transition-all duration-300">
                        Explore Technology <ArrowRight size={20} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">🤖 What Makes Us Different?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Our proprietary AI-driven systems continuously analyze market conditions, order flow patterns, and
                    volatility metrics to provide optimal liquidity across multiple exchanges simultaneously.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-400 mb-2 text-sm">🎯 Algorithm Features</h4>
                    <ul className="space-y-1 text-gray-300 text-xs">
                      <li>• Real-time spread optimization</li>
                      <li>• Dynamic order book management</li>
                      <li>• Cross-exchange arbitrage detection</li>
                      <li>• Volatility-adjusted positioning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-400 mb-2 text-sm">📊 Performance Metrics</h4>
                    <ul className="space-y-1 text-gray-300 text-xs">
                      <li>• 99.9% uptime across all markets</li>
                      <li>• Sub-millisecond execution</li>
                      <li>• 24/7 global market coverage</li>
                      <li>• Real-time risk management</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border border-gray-600">
                  <h4 className="font-bold text-white mb-3 text-sm">🚀 Expected Results</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "60%", label: "Spread Reduction", color: "text-cyan-400" },
                      { value: "3-5x", label: "Order Book Depth", color: "text-blue-400" },
                      { value: "24/7", label: "Market Coverage", color: "text-green-400" },
                      { value: "40%", label: "Volume Increase", color: "text-purple-400" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`font-bold ${item.color} text-sm`}>{item.value}</div>
                        <p className="text-gray-400 text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-4 rounded-xl border border-cyan-500/30">
                  <h4 className="font-bold text-white mb-2 text-sm">💡 Why Choose Our Market Making?</h4>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• 🧠 AI-powered decision making, not simple bots</li>
                    <li>• 🌍 Multi-exchange coverage (CEX & DEX)</li>
                    <li>• 📈 Proven track record with 100+ tokens</li>
                    <li>• 🛡️ Institutional-grade risk management</li>
                  </ul>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Social Media Management Section */}
      <section id="social-media-management" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Social Media Management
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional Twitter and Telegram management services that build authentic communities and drive
              meaningful engagement.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ServiceModal
              title="Twitter & Telegram Management"
              subtitle="Build Hype. Grow Trust. Engage Like a Pro."
              icon="📱"
              triggerContent={
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-12 rounded-3xl hover:border-pink-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:scale-[1.02]">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">Social Media Management</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Comprehensive Twitter and Telegram management that builds authentic communities and drives real
                        engagement.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-4 text-center">
                        <h4 className="font-bold text-blue-400 mb-2 text-sm">🐦 Twitter Management</h4>
                        <p className="text-gray-400 text-xs">Daily content & growth campaigns</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-4 text-center">
                        <h4 className="font-bold text-green-400 mb-2 text-sm">💬 Telegram Management</h4>
                        <p className="text-gray-400 text-xs">24/7 moderation & engagement</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center text-pink-400 font-medium group-hover:gap-2 transition-all duration-300">
                        Discover Our Approach <ArrowRight size={20} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-6 rounded-xl border border-blue-500/30">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-lg">🐦</span>
                      </div>
                      <h3 className="font-bold text-white">Twitter Management</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-1 text-sm">📝 Content Strategy</h4>
                        <ul className="text-gray-300 space-y-0.5 text-xs">
                          <li>• Daily tweets, threads, viral content</li>
                          <li>• Trend-jacking and Web3 memes</li>
                          <li>• Educational and thought leadership</li>
                          <li>• Interactive polls and engagement</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-400 mb-1 text-sm">🚀 Growth Tactics</h4>
                        <ul className="text-gray-300 space-y-0.5 text-xs">
                          <li>• Strategic hashtag optimization</li>
                          <li>• Influencer collaborations</li>
                          <li>• Community engagement campaigns</li>
                          <li>• Giveaways and contests</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-6 rounded-xl border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
                        <span className="text-lg">💬</span>
                      </div>
                      <h3 className="font-bold text-white">Telegram Management</h3>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-1 text-sm">🛡️ Community Moderation</h4>
                        <ul className="text-gray-300 space-y-0.5 text-xs">
                          <li>• 24/7 active moderation</li>
                          <li>• Anti-spam protection</li>
                          <li>• Custom bot management</li>
                          <li>• Multilingual support</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-400 mb-1 text-sm">🎯 Engagement Strategy</h4>
                        <ul className="text-gray-300 space-y-0.5 text-xs">
                          <li>• Regular AMA sessions</li>
                          <li>• Community challenges</li>
                          <li>• News updates</li>
                          <li>• Member retention</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-600">
                  <h4 className="font-bold text-white mb-4 text-center text-sm">
                    🌟 Why Projects Choose Our Social Media Management
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Web3-Native Team", desc: "Deep crypto knowledge", icon: "W3" },
                      { label: "24/7 Coverage", desc: "Global time zones", icon: "24" },
                      { label: "Real Engagement", desc: "Authentic interactions", icon: "🎯" },
                      { label: "Data-Driven", desc: "Analytics & insights", icon: "📊" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xs">{item.icon}</span>
                        </div>
                        <p className="text-gray-300 font-semibold text-xs">{item.label}</p>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-4 rounded-xl border border-pink-500/30">
                  <h4 className="font-bold text-white mb-2 text-sm">📈 Typical Results:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-bold text-pink-400">300%</p>
                      <p className="text-gray-400 text-xs">Follower Growth</p>
                    </div>
                    <div>
                      <p className="font-bold text-purple-400">500%</p>
                      <p className="text-gray-400 text-xs">Engagement Rate</p>
                    </div>
                    <div>
                      <p className="font-bold text-blue-400">24/7</p>
                      <p className="text-gray-400 text-xs">Community Activity</p>
                    </div>
                  </div>
                </div>
              </div>
            </ServiceModal>
          </div>
        </div>
      </section>

      {/* Apple-style CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Your Crypto Project?
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful projects that trust {siteConfig.name} for their growth, listings, and market
              making needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => scrollToSection("contact-us")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-2xl inline-flex items-center gap-3 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Get Started Today <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("marketing-services")}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-10 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to take your crypto project to the next level? Our team of experts is here to help you succeed in
              the competitive Web3 landscape.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📧</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Email Us</h3>
                <p className="text-gray-400 mb-4 text-sm">Get in touch for detailed discussions</p>
                <Link
                  href="mailto:info@easymm.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  info@easymm.com
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-green-500/30 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Telegram</h3>
                <p className="text-gray-400 mb-4 text-sm">Quick responses and support</p>
                <Link
                  href="https://t.me/easymm_support"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  @easymm_support
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📞</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Phone</h3>
                <p className="text-gray-400 mb-4 text-sm">Direct consultation calls</p>
                <Link
                  href="tel:+11234567890"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  +1 (123) 456-7890
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Schedule a free consultation to discuss your project's needs and how we can help you achieve your goals.
              </p>
              <Button
                onClick={() => window.open("mailto:info@easymm.com?subject=Free Consultation Request", "_blank")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">{siteConfig.name.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">{siteConfig.description}</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-lg">🐦</span>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-lg">💬</span>
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-lg">💼</span>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("marketing-services")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Marketing Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("listing-services")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Exchange Listings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("market-making-services")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Market Making
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("social-media-management")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Social Media Management
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#help" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact-us")}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">Empowering crypto projects worldwide since 2021</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
