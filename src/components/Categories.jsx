// src/components/Categories.jsx
const Categories = () => {
  const categories = [
    {
      title: "Sports Betting",
      description: "Football, basketball, tennis and more from professional punters",
      icon: "⚽",
      stats: "2,340+ Active Tips",
      color: "bg-[#855391]"
    },
    {
      title: "Forex Trading",
      description: "Currency signals from experienced forex traders",
      icon: "📈",
      stats: "1,560+ Daily Signals",
      color: "bg-[#fea92a]"
    },
    {
      title: "Crypto Trading",
      description: "BTC, ETH and altcoin signals from crypto experts",
      icon: "₿",
      stats: "890+ Crypto Alerts",
      color: "bg-[#18ffc8]"
    },
  ];

  return (
    <section id="categories" className="py-20 bg-[#09100d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#efefef] mb-4">
            Expert Categories
          </h2>
          <p className="text-xl text-[#efefef] max-w-3xl mx-auto">
            Choose from various categories of professionals specializing in different markets and strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-[#162821] rounded-2xl p-6 border border-[#376553] hover:border-[#fea92a] transition-all duration-300 group">
              <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-6`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-[#efefef] mb-3">{category.title}</h3>
              <p className="text-[#efefef] mb-4">{category.description}</p>
              <div className="text-[#18ffc8] text-sm font-medium">{category.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;