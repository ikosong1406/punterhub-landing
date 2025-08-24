// src/components/HowItWorks.jsx
import background from "../assets/background.gif";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up Free",
      description:
        "Create your account in seconds. No commitment required to browse our expert punters and traders.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Choose Experts",
      description:
        "Browse verified professionals, check their performance stats, and select those who match your strategy.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Receive Signals",
      description:
        "Get real-time alerts directly to your devices. Never miss a profitable opportunity again.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Profit Together",
      description:
        "Follow the signals, track your results, and grow your portfolio alongside proven experts.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background animation"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#efefef] mb-4">
            How PunterHub Works
          </h2>
          <p className="text-xl text-[#efefef] max-w-3xl mx-auto">
            Getting started with expert signals is simple. Follow these four
            easy steps to begin your journey to better betting and trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#09100d] bg-opacity-80 backdrop-blur-sm rounded-2xl border border-[#376553] hover:border-[#fea92a] transition-all duration-300"
            >
              <div className="text-[#fea92a] text-2xl font-bold mb-2">
                {step.number}
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#855391] bg-opacity-20 mb-4 text-[#fea92a]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#efefef] mb-4">
                {step.title}
              </h3>
              <p className="text-[#efefef]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
