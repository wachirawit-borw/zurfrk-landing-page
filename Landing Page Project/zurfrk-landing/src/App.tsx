export default function App() {
  return (
    <>
      <section id="header">
        <header className="w-full px-8 py-4 flex justify-between items-center bg-[#e5c4a5]">
          {/* Logo */}
          <h1 className="text-2xl font-bold">ZURFRK</h1>

          {/* Navigation */}
          <nav className="flex items-center gap-4 text-sm font-medium text-blue-600">
            <a href="#header">Home</a>
            <a href="#features">Features</a>
            <a href="#about">Contact</a>
            <a href="#">Explore</a>

            {/* Auth Buttons */}
            <button className="bg-white text-black px-4 py-1 rounded">Sign in</button>
            <button className="bg-black text-white px-4 py-1 rounded">Register</button>
          </nav>
        </header>
      </section>
      <section
        className="relative w-full h-[850px] bg-[url('/picture/Hero-image.jpg')] bg-cover bg-center bg-no-repeat"
      >
        {/* overlay ปรับความฟุ้งและโทนสีแบบ Figma */}
        <div className="absolute inset-0 bg-[#D9B89C]/80 mix-blend-multiply z-10"></div>

        {/* ข้อความซ้อนกลางจอ */}
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow">
              Step into Style <br />
              Walk with ZURFRK
            </h2>
            <button className="mt-6 px-6 py-2 bg-black text-white font-semibold rounded shadow">
              Shop now
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#e5c4a5] py-16 px-6 text-black text-center">
        <h2 className="text-2xl font-bold mb-10 drop-shadow">Features</h2>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10">
          {/** Feature box (สามารถเพิ่มได้ในอนาคตโดยไม่ต้องจัดใหม่) */}
          <div className="w-[250px] flex flex-col items-center">
            <span className="text-3xl mb-4">🪶</span>
            <h3 className="font-semibold text-lg mb-2">Lightweight</h3>
            <p className="text-sm text-gray-800">
              Walk freely all day, ultra-light cushioning and flexibility.
            </p>
          </div>

          <div className="w-[250px] flex flex-col items-center">
            <span className="text-3xl mb-4">⚡</span>
            <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
            <p className="text-sm text-gray-800">
              Your order ships in 24 hours. We value time just like you do.
            </p>
          </div>

          <div className="w-[250px] flex flex-col items-center">
            <span className="text-3xl mb-4">🧍</span>
            <h3 className="font-semibold text-lg mb-2">Elegant Design</h3>
            <p className="text-sm text-gray-800">
              Designed for presence — simple, sharp and bold.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#D9B89C] py-16 px-6 text-black">
        <h2 className="text-2xl font-bold text-center mb-10 drop-shadow">About</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ข้อความฝั่งซ้าย */}
          <div className="text-left space-y-4 px-4">
            <h3 className="text-lg font-bold">ZURFRK</h3>
            <p className="text-sm">
              ZURFRK is a premium men’s footwear brand born from the pursuit of timeless simplicity. <br />
              We design with presence — clean lines, elegant curves, and comfort you forget you’re wearing.
            </p>
            <p className="text-sm">
              Each pair is crafted for the man who doesn’t follow trends. He sets them.
            </p>
          </div>

          {/* รูปภาพฝั่งขวา */}
          <div className="px-4">
            <img
              src="/picture/About-image.jpg"
              alt="About ZURFRK"
              className="rounded shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative w-full h-[500px] bg-black overflow-hidden flex items-center justify-center text-white"
      >
        <img
          src="/picture/Subscribe.jpg"
          alt="Subscribe Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Subscribe now</h2>
          <p className="text-lg mb-6 text-gray-100">Sign up for our newsletter</p>

          <form className="flex flex-col w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-white text-black placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-2 bg-black text-white rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-[#D9B89C] text-black px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + Social Icons */}
          <div>
            <h2 className="text-xl font-bold mb-4">ZURFRK</h2>
            <div className="flex gap-4 text-black text-xl">
              <i className="fab fa-x-twitter hover:text-blue-600 transition"></i>
              <i className="fab fa-instagram hover:text-pink-500 transition"></i>
              <i className="fab fa-youtube hover:text-red-600 transition"></i>
              <i className="fab fa-linkedin hover:text-blue-700 transition"></i>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-bold mb-3">Use cases</h3>
            <ul className="space-y-1 text-sm">
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="font-bold mb-3">Category</h3>
            <ul className="space-y-1 text-sm">
              <li>Men’s Shoes</li>
              <li>New Arrivals</li>
              <li>Casual Collection</li>
              <li>Limited Edition</li>
              <li>Size & Fit</li>
              <li>Lookbook</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold mb-3">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}
