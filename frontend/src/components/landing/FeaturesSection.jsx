const features = [
    {
      title: "Easy Skill Exchange",
      description: "Find people who want to learn or teach skills efficiently.",
    },
    {
      title: "Secure & Verified",
      description: "Verified users ensure a safe skill-sharing experience.",
    },
    {
      title: "Real-time Chat",
      description: "Communicate easily with real-time chat support.",
    },
  ];
  
  const FeaturesSection = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Why Choose LearnMate?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  