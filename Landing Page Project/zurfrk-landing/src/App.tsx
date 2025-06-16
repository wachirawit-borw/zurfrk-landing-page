import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <section id="header">
        <header className="w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-[#b60b0b] shadow-md">
          <h1 className="text-3xl font-extrabold text-[#1e3a8a] drop-shadow-sm tracking-wide">
            ZURFRK
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 font-extrabold drop-shadow-sm tracking-wide">
            <a href="#header" className="hover:text-black transition">Home</a>
            <a href="#features" className="hover:text-black transition">Features</a>
            <a href="#about" className="hover:text-black transition">Contact</a>
            <a href="#Explore" className="hover:text-black transition">Explore</a>
            <button className="bg-white text-black px-4 py-1 rounded-full shadow hover:bg-gray-100 transition">Sign in</button>
            <button className="bg-black text-white px-4 py-1 rounded-full shadow hover:opacity-90 transition">Register</button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#e5c4a5] px-4 py-3 space-y-2 text-gray-800 text-sm font-medium shadow-inner">
            <a href="#header" className="block hover:text-black transition">Home</a>
            <a href="#features" className="block hover:text-black transition">Features</a>
            <a href="#about" className="block hover:text-black transition">Contact</a>
            <a href="#Explore" className="block hover:text-black transition">Explore</a>
            <button className="block w-full text-left bg-white text-black px-4 py-1 rounded-full shadow hover:bg-gray-100 transition">Sign in</button>
            <button className="block w-full text-left bg-black text-white px-4 py-1 rounded-full shadow hover:opacity-90 transition">Register</button>
          </div>
        )}
      </section>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] sm:h-[850px] bg-[url('/picture/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[#D9B89C]/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-40 px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-snug">
              Step into Style <br /> Walk with ZURFRK
            </h2>
            <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition">
              Shop now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#edc6a1] py-20 px-6 text-black text-center">
        <h2 className="text-3xl font-bold mb-12 tracking-tight drop-shadow-sm">Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          <Feature icon="🪶" title="Lightweight" text="Walk freely all day with ultra-light cushioning." />
          <Feature icon="⚡" title="Fast Shipping" text="Your order ships within 24 hours, guaranteed." />
          <Feature icon="🧍" title="Elegant Design" text="Minimal, bold and timeless — design with presence." />
        </div>
      </section>

      {/* Image Showcase */}
      <section className="bg-[#edc6a1] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageBox src="/picture/shoes-image1.jpg" alt="Shoe 1" />
          <ImageBox src="/picture/shoes-image2.jpg" alt="Shoe 2" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#edc6a1] py-16 px-4 text-black">
        <h2 className="text-2xl font-bold text-center mb-10 drop-shadow">About</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 px-4 place-self-start">
            <h3 className="text-lg font-bold">ZURFRK</h3>
            <p className="text-sm">ZURFRK is a premium men’s footwear brand born from the pursuit of timeless simplicity. We design with presence clean lines, elegant curves and comfort you forget you’re wearing.</p>
            <p className="text-sm">Each pair is crafted for the man who doesn’t follow trends. He sets them.</p>
          </div>
          <ImageBox src="/picture/about-image.jpg" alt="About ZURFRK" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full h-[500px] bg-black overflow-hidden flex items-center justify-center text-white">
        <img src="/picture/subscribe.jpg" alt="Subscribe Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Subscribe now</h2>
          <p className="text-lg mb-6 text-gray-100">Sign up for our newsletter</p>
          <form className="flex flex-col w-full max-w-md gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded bg-white text-black placeholder-gray-500" />
            <button type="submit" className="w-full px-6 py-2 bg-black text-white rounded">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section id="Explore">
        <footer className="bg-[#D9B89C] text-black px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterBlock title="ZURFRK">
              <div className="flex gap-4 text-black text-xl">
                <i className="fab fa-x-twitter hover:text-blue-600 transition"></i>
                <i className="fab fa-instagram hover:text-pink-500 transition"></i>
                <i className="fab fa-youtube hover:text-red-600 transition"></i>
                <i className="fab fa-linkedin hover:text-blue-700 transition"></i>
              </div>
            </FooterBlock>
            <FooterList title="Use cases" items={["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"]} />
            <FooterList title="Category" items={["Men’s Shoes", "New Arrivals", "Casual Collection", "Limited Edition", "Size & Fit", "Lookbook"]} />
            <FooterList title="Explore" items={["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process", "FigJam"]} />
          </div>
        </footer>
      </section>
    </>
  );
}
// Type สำหรับ Feature
type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="w-full sm:w-[250px] flex flex-col items-center text-center">
      <span className="text-3xl mb-4">{icon}</span>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  );
}

// Type สำหรับ ImageBox
type ImageBoxProps = {
  src: string;
  alt: string;
};

function ImageBox({ src, alt }: ImageBoxProps) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

// Type สำหรับ FooterBlock
type FooterBlockProps = {
  title: string;
  children: React.ReactNode;
};

function FooterBlock({ title, children }: FooterBlockProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

// Type สำหรับ FooterList
type FooterListProps = {
  title: string;
  items: string[];
};

function FooterList({ title, items }: FooterListProps) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-1 text-sm">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
