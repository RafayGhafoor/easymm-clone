import Link from "next/link"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
        Contact Us
      </h1>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        We'd love to hear from you! Please reach out with any inquiries.
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          href="mailto:info@easymm.com"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          Email Us
        </Link>
        <p className="text-gray-400">Or call us at: +1 (123) 456-7890</p>
      </div>
    </div>
  )
}
