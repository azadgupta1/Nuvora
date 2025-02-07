import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Start Learning & Teaching Today!</h2>
      <p className="mb-6">Join LearnMate and be part of a growing skill exchange community.</p>
      <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
        Sign Up Now
      </Link>
    </section>
  );
};

export default CTASection;

