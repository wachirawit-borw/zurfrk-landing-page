"use client";

import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Hero() {
    const [canPlayVideo, setCanPlayVideo] = useState(false); //
    const [showButton, setShowButton] = useState(false);


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
            <Head>
                <link
                    rel="preload"
                    as="video"
                    href="/video/hero-video.webm"
                    type="video/webm"
                />
            </Head>
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
                    </video>
                ) : (
                    /* ✅ fallback รูปภาพ */
                    <Image
                        src="/picture/hero-image.webp"
                        alt="Hero Background"
                        fill
                        priority // ✅ preload รูป
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
        button-shop
        mt-6
        transition-all duration-700 ease-out
        ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
    `}
                        aria-label="Shop now"
                    >
                        <div className="button-shop__text">Shop now</div>

                        <div className="button-shop__icon">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 576 512"
                                height="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}
