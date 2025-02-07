import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Learn & Teach Skills with Ease
        </h1>
        <p className="text-lg mb-6">
          Join our platform to exchange skills and grow together!
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
