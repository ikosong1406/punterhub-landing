// src/components/Footer.jsx
import logo from "../assets/logo1.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#09100d] py-12 border-t border-[#162821]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Punterhub Logo" className="h-8" />
            <p className="text-[#efefef] mb-4">
              The premier platform connecting betting and trading experts with
              those seeking profitable signals.
            </p>
          </div>

          <div>
            <h4 className="text-[#efefef] font-bold mb-4">For Users</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.thepunterhub.com/signup"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Find Experts
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#efefef] font-bold mb-4">For Experts</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.thepunterhub.com/signup"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Become a Punter
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("categories")}
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Expert Categories
                </button>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-[#efefef] font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#efefef] hover:text-[#fea92a] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="pt-8 border-t border-[#162821] text-center">
          <p className="text-[#efefef]">
            © {new Date().getFullYear()} PunterHub. All rights reserved.
            Gambling involves risk. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
