import Link from "next/link"
import { ArrowRight, Zap, Layers, Shield, ChevronDown } from "lucide-react"
import { siteConfig } from "@/config/site"
import { CountUp } from "@/components/count-up"
import { AnimatedGradient } from "@/components/animated-gradient"
import { TradingChart } from "@/components/trading-chart"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center animate-pulse">
            <span className="text-white font-bold">{siteConfig.name.charAt(0)}</span>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {siteConfig.name}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <AnimatedGradient className="absolute inset-0 -z-10 opacity-30" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-400 font-medium mb-6 border border-blue-700/50 animate-fadeIn">
            Automated Market Making Bot
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-gradient">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fadeIn">{siteConfig.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start trading <ArrowRight size={18} />
            </Link>
            <Link
              href="/demo"
              className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-md w-full sm:w-auto hover:bg-slate-700 transition-all duration-300"
            >
              Watch demo
            </Link>
          </div>
        </div>

        <div className="mt-16 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-800 animate-fadeIn">
          <TradingChart />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900/50 py-12 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 flex justify-center">
                $<CountUp end={250} duration={2.5} />
                M+
              </div>
              <p className="text-gray-400 mt-2">Trading Volume</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 flex justify-center">
                <CountUp end={50} duration={2} />+
              </div>
              <p className="text-gray-400 mt-2">Exchanges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 flex justify-center">
                <CountUp end={99.9} decimals={1} duration={2.5} />%
              </div>
              <p className="text-gray-400 mt-2">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 flex justify-center">
                <CountUp end={10000} duration={2.5} />+
              </div>
              <p className="text-gray-400 mt-2">Active Traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Advanced Trading Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our market making bot comes packed with powerful features to maximize your profits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, index) => {
              const IconComponent = feature.icon === "Zap" ? Zap : feature.icon === "Layers" ? Layers : Shield

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg group animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              How {siteConfig.name} works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Three simple steps to start generating profits with our market making bot.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {siteConfig.steps.map((step, index) => (
              <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold transform hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Pairs */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Supported Trading Pairs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our bot supports a wide range of trading pairs across multiple exchanges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-marquee">
            {[
              { name: "BTC/USDT", color: "from-amber-500 to-amber-600" },
              { name: "ETH/USDT", color: "from-blue-500 to-blue-600" },
              { name: "SOL/USDT", color: "from-purple-500 to-purple-600" },
              { name: "BNB/USDT", color: "from-yellow-500 to-yellow-600" },
              { name: "XRP/USDT", color: "from-blue-400 to-blue-500" },
              { name: "ADA/USDT", color: "from-blue-600 to-blue-700" },
              { name: "DOGE/USDT", color: "from-yellow-400 to-yellow-500" },
              { name: "AVAX/USDT", color: "from-red-500 to-red-600" },
              { name: "MATIC/USDT", color: "from-purple-400 to-purple-500" },
              { name: "DOT/USDT", color: "from-pink-500 to-pink-600" },
            ].map((pair, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${pair.color} px-4 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                {pair.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that works for your trading strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteConfig.pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border ${
                  plan.popular ? "border-green-500" : "border-slate-700"
                } hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg relative animate-fadeIn`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 transform translate-y-0 translate-x-0 rounded-bl-lg rounded-tr-lg font-medium">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="text-4xl font-bold mb-6 text-white">
                  {plan.price}
                  <span className="text-xl text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/signup/${plan.name.toLowerCase()}`}
                  className={`block text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/20"
                      : "bg-slate-800 border border-slate-700 text-white hover:bg-slate-700"
                  } px-6 py-3 rounded-md w-full transition-all duration-300 transform hover:-translate-y-1`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 -z-10"></div>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know about {siteConfig.name}.</p>
          </div>

          <div className="space-y-6">
            {siteConfig.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>
                <div className="mt-3 text-gray-400">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 animate-gradient">
            Ready to start market making?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 animate-fadeIn">
            Join thousands of traders who use {siteConfig.name} to generate passive income.
          </p>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-md inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
          >
            Start your free trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">{siteConfig.name.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-gray-400">{siteConfig.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/exchanges" className="text-gray-400 hover:text-white transition-colors">
                    Supported Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
