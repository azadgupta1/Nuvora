import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">kesero</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">How it works</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Our Story</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Kesero Connect</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">News</a>
          <Button className="bg-blue-600 text-white">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold text-gray-800">Use your skills as currency</h2>
        <p className="mt-4 text-lg text-gray-600">Discover an app where you can share skills, save money, and feel rewarded.</p>
        <Button className="mt-6 bg-blue-600 text-white px-6 py-3">Join the Community</Button>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="who.png" alt="Who" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Who?</h3>
          <p>Your skills make a difference to you and to others.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="what.png" alt="What" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">What?</h3>
          <p>Connect with people who need what you can do.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src="why.png" alt="Why" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Why?</h3>
          <p>Life is changing—work smarter with Kesero.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-10">
        <h2 className="text-center text-3xl font-bold mb-6">What People Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"Kesero is simply brilliant! I've helped others and got support in return!"</p>
            <p className="font-semibold mt-2">- Alan Clarke</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>"I needed financial help for my business and found someone instantly!"</p>
            <p className="font-semibold mt-2">- John Barlow</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; Kesero Ltd 2025 - All Rights Reserved</p>
      </footer>
    </div>
  );
}
