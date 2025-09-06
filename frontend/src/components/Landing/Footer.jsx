import React from 'react'

function Footer() {
  return (
    <div>
        {/* 🤖 AI Match (Future Teaser) */}
            <section className="py-20 bg-gray-50" id="future">
            <h3 className="text-3xl font-bold text-center mb-6">🤖 AI-Powered Skill Match</h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Soon, Nuvora will use AI to recommend the best skills for you to learn and the ideal partners to exchange with.
            </p>
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl text-center">
                <p className="text-lg text-gray-700">
                🚀 Imagine: You add “Guitar” as your skill → AI finds you learners who want guitar & can teach you Spanish, Coding, or Yoga instantly.
                </p>
            </div>
            </section>


            {/* 🚀 Final Call-to-Action */}
                <section className="py-20 bg-indigo-600 text-white text-center">
                <h3 className="text-4xl font-bold mb-6">Ready to Swap Skills?</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join a growing global community where knowledge flows freely. Teach what you know, learn what you love.
                </p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100">
                    Join Nuvora Today
                </button>
                </section>


                {/* 📌 Footer */}
<footer className="bg-gray-900 text-gray-300 py-10" id="contact">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
    <div>
      <h4 className="text-white font-bold text-xl mb-4">Nuvora</h4>
      <p>Exchange skills, not money. A global knowledge-sharing platform.</p>
    </div>
    <div>
      <h4 className="text-white font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#features" className="hover:text-white">Features</a></li>
        <li><a href="#stories" className="hover:text-white">Stories</a></li>
        <li><a href="#categories" className="hover:text-white">Categories</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-bold mb-4">Connect</h4>
      <p>Email: hello@nuvora.com</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-white">🌐</a>
        <a href="#" className="hover:text-white">🐦</a>
        <a href="#" className="hover:text-white">📸</a>
      </div>
    </div>
  </div>
  <div className="text-center mt-10 text-gray-500 text-sm">
    © {new Date().getFullYear()} Nuvora. All rights reserved.
  </div>
</footer>


    </div>
  )
}

export default Footer