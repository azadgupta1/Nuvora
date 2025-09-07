import React from 'react'

function CTA() {
  return (
    <div>
        {/* 🚀 Final Call-to-Action */}
        <section className="py-20 bg-black text-white text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Swap Skills?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            Join a growing global community where knowledge flows freely. 
            Teach what you know, learn what you love.
            </p>
            <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition"
            >
            Join Nuvora Today
            </button>
        </section>
    </div>
  )
}

export default CTA