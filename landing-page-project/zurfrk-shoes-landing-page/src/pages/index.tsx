"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* ───────────────────────── Main Page ───────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(false); //
  const [showButton, setShowButton] = useState(false);

  const shoes = [
    { src: "/picture/shoes-image1.webp", alt: "Shoe 1" },
    { src: "/picture/shoes-image2.webp", alt: "Shoe 2" },
    { src: "/picture/shoes-image3.webp", alt: "Shoe 3" },
    { src: "/picture/shoes-image5.webp", alt: "Shoe 5" },
    { src: "/picture/shoes-image6.webp", alt: "Shoe 6" },
  ];

  useEffect(() => {
    const vid = document.createElement("video");
    const support = vid.canPlayType("video/webm");
    if (support === "probably" || support === "maybe") setCanPlayVideo(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 1500); // โผล่หลัง 1 วิ
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* ───────────────── Header ───────────────── */}
      <header
        id="header"
        className="w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-[#b60b0b] shadow-md"
      >
        <h1 className="text-3xl font-extrabold text-[#dadbdb] drop-shadow-sm tracking-wide">
          ZURFRK
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-extrabold drop-shadow-sm tracking-wide">
          <Link href="#header">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#explore">Explore</Link>
          <button className="bg-white text-black px-4 py-1 rounded-full shadow hover:bg-gray-100 transition">
            Sign in
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-full shadow hover:opacity-90 transition">
            Register
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e5c4a5] px-4 py-3 space-y-2 text-gray-800 text-sm font-medium shadow-inner">
          <Link href="#header" className="block">
            Home
          </Link>
          <Link href="#features" className="block">
            Features
          </Link>
          <Link href="#about" className="block">
            About
          </Link>
          <Link href="#explore" className="block">
            Explore
          </Link>
          <button className="block w-full text-left bg-white text-black px-4 py-1 rounded-full shadow">
            Sign in
          </button>
          <button className="block w-full text-left bg-black text-white px-4 py-1 rounded-full shadow">
            Register
          </button>
        </div>
      )}

      {/* ───────────────── Hero ───────────────── */}
      <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden">
        {canPlayVideo ? (
          /* ✅ วิดีโอพื้นหลัง (เล่นได้) */
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setCanPlayVideo(false)} // ถ้าเล่นไม่ได้ให้ fallback
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            poster="/picture/hero-image.webp"
          >
            <source src="/video/hero-video.webm" type="video/webm" />
            <source src="/video/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          /* ✅ fallback รูปภาพ */
          <Image
            src="/picture/hero-image.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center z-0"
          />
        )}

        {/* overlay สีทอง */}
        <div className="absolute inset-0 bg-[#D9B89C]/80 mix-blend-multiply z-10" />

        {/* เนื้อหา Hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center text-white">
          <h2 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
            Step into Style <br /> Walk with ZURFRK
          </h2>

          {/* ปุ่ม Shop now ที่โผล่แบบมี delay */}
          <button
            className={`
              mt-6 px-6 py-2 rounded-full bg-[#686666] text-white font-medium
              transition-all duration-700 ease-out
              ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
          >
            Shop now
          </button>
        </div>
      </section>

      {/* ───────────────── Features ───────────────── */}
      <section id="features" className="bg-[#edc6a1] py-20 px-6 text-black text-center">
        <h2 className="text-3xl font-bold mb-12 tracking-tight drop-shadow-sm">Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          <Feature icon="🪶" title="Lightweight" text="Walk freely all day with ultra-light cushioning." />
          <Feature icon="⚡" title="Fast Shipping" text="Your order ships within 24 hours, guaranteed." />
          <Feature icon="🧍" title="Elegant Design" text="Minimal, bold and timeless — design with presence." />
        </div>
      </section>

      {/* ───────────────── Image Showcase ───────────────── */}
      <section className="bg-[#edc6a1] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Autoplay]} // ✅ เพิ่ม Autoplay เข้าไปด้วย
            autoplay={{
              delay: 3000,                // ✅ ทุก 3 วิ
              disableOnInteraction: false // ✅ ยังคงเลื่อนต่อแม้ user จะแตะ
            }}
            navigation
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {shoes.map((item, index) => (
              <SwiperSlide key={index}>
                <ImageBox src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ───────────────── About ───────────────── */}
      <section id="about" className="bg-[#edc6a1] py-16 px-4 text-black">
        <h2 className="text-2xl font-bold text-center mb-10 drop-shadow">About</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 px-4 place-self-start">
            <h3 className="text-lg font-bold">ZURFRK</h3>
            <p className="text-sm">
              ZURFRK is a premium men’s footwear brand born from the pursuit of timeless simplicity.
              We design with presence clean lines, elegant curves and comfort you forget you’re wearing.
            </p>
            <p className="text-sm">
              Each pair is crafted for the man who doesn’t follow trends. He sets them.
            </p>
          </div>
          <ImageBox src="/picture/about-image.webp" alt="About ZURFRK" />
        </div>
      </section>

      {/* ───────────────── Contact ───────────────── */}
      <section
        id="contact"
        className="relative w-full h-[500px] bg-black overflow-hidden flex items-center justify-center text-white"
      >
        <Image
          src="/picture/subscribe.webp"
          alt="Subscribe background"
          fill
          className="object-cover z-0"
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
            <button type="submit" className="w-full px-6 py-2 bg-black text-white rounded">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ───────────────── Footer / Explore ───────────────── */}
      <section id="explore">
        <footer className="bg-[#D9B89C] text-black px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterBlock title="ZURFRK">
              <div className="flex gap-4 text-black text-xl">
                <i className="fab fa-x-twitter hover:text-blue-600 transition" />
                <i className="fab fa-instagram hover:text-pink-500 transition" />
                <i className="fab fa-youtube hover:text-red-600 transition" />
                <i className="fab fa-linkedin hover:text-blue-700 transition" />
              </div>
            </FooterBlock>

            <FooterList
              title="Use cases"
              items={[
                "UI design",
                "UX design",
                "Wireframing",
                "Diagramming",
                "Brainstorming",
                "Online whiteboard",
                "Team collaboration",
              ]}
            />

            <FooterList
              title="Category"
              items={[
                "Men’s Shoes",
                "New Arrivals",
                "Casual Collection",
                "Limited Edition",
                "Size & Fit",
                "Lookbook",
              ]}
            />

            <FooterList
              title="Explore"
              items={[
                "Design",
                "Prototyping",
                "Development features",
                "Design systems",
                "Collaboration features",
                "Design process",
                "FigJam",
              ]}
            />
          </div>
        </footer>
      </section>
    </>
  );
}

/* ───────────────────────── Child Components ───────────────────────── */
type FeatureProps = { icon: string; title: string; text: string };

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="w-full sm:w-[250px] flex flex-col items-center text-center">
      <span className="text-3xl mb-4">{icon}</span>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  );
}

type ImageBoxProps = { src: string; alt: string; priority?: boolean };

function ImageBox({ src, alt, priority = false }: ImageBoxProps) {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

type FooterBlockProps = { title: string; children: React.ReactNode };

function FooterBlock({ title, children }: FooterBlockProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

type FooterListProps = { title: string; items: string[] };

function FooterList({ title, items }: FooterListProps) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
