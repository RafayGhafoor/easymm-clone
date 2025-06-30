export const siteConfig = {
  name: "EasyMM",
  description:
    "Automated trading system that places buy and sell orders to profit from the bid-ask spread while providing liquidity to the market.",
  tagline: "Maximize profits with automated market making",
  features: [
    {
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our high-performance infrastructure.",
      icon: "Zap",
    },
    {
      title: "Advanced Algorithms",
      description: "Proprietary algorithms designed to maximize profits from market spreads.",
      icon: "Layers",
    },
    {
      title: "Risk Management",
      description: "Sophisticated risk controls to protect your capital in volatile markets.",
      icon: "Shield",
    },
  ],
  steps: [
    {
      title: "Connect your exchange",
      description: "Securely connect to your preferred exchanges with API keys.",
    },
    {
      title: "Configure your strategy",
      description: "Set your risk parameters, trading pairs, and profit targets.",
    },
    {
      title: "Start generating profits",
      description: "Let the bot work 24/7 to capture spreads and provide liquidity.",
    },
  ],
  pricing: [
    {
      name: "Basic",
      price: "$49",
      period: "/mo",
      description: "For individual traders",
      features: ["Up to 3 trading pairs", "Basic algorithms", "Standard execution speed", "Email support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$149",
      period: "/mo",
      description: "For serious traders",
      features: [
        "Unlimited trading pairs",
        "Advanced algorithms",
        "Priority execution",
        "24/7 support",
        "Custom risk parameters",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/mo",
      description: "For institutions",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom algorithms",
        "Dedicated server",
        "Account manager",
      ],
      popular: false,
    },
  ],
  faqs: [
    {
      question: "What is a market making bot?",
      answer:
        "A market making bot is an automated trading system that places buy and sell orders to profit from the bid-ask spread while providing liquidity to the market. It continuously quotes both buy and sell prices for a financial instrument, making a profit from the difference.",
    },
    {
      question: "Which exchanges are supported?",
      answer:
        "Our market making bot supports major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, FTX, and more. We're constantly adding support for additional exchanges.",
    },
    {
      question: "How much capital do I need to start?",
      answer:
        "While you can start with any amount, we recommend at least $5,000 to effectively capture spreads across multiple trading pairs. The more capital you deploy, the more opportunities the bot can take advantage of.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Your funds remain in your exchange account at all times. Our bot connects via API keys that you can restrict to trading only (no withdrawal permissions). We never take custody of your assets.",
    },
  ],
}
