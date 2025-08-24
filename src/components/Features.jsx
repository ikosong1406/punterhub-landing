// src/components/Features.jsx
const Features = () => {
  const features = [
    {
      title: "Real-time Signals",
      description: "Get instant notifications for new betting tips and trading signals directly to your devices.",
      icon: "⚡"
    },
    {
      title: "Expert Verification",
      description: "All punters and traders are thoroughly vetted with transparent performance history.",
      icon: "✅"
    },
    {
      title: "Performance Tracking",
      description: "Monitor success rates, ROI, and track records of all experts before subscribing.",
      icon: "📊"
    },
    {
      title: "Multiple Markets",
      description: "Access signals for sports betting, forex, crypto, and eSports all in one platform.",
      icon: "🌐"
    },
    {
      title: "Secure Payments",
      description: "Safe and secure payment processing with multiple options and subscription management.",
      icon: "🔒"
    },
    {
      title: "Community Chat",
      description: "Direct messaging with experts and other community members for discussions.",
      icon: "💬"
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#09100d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#efefef] mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-[#efefef] max-w-3xl mx-auto">
            Everything you need to succeed in betting and trading, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#162821] rounded-2xl p-6 border border-[#376553] hover:border-[#fea92a] transition-all duration-300">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#efefef] mb-3">{feature.title}</h3>
              <p className="text-[#efefef]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;