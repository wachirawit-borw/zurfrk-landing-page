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
              mt-6 px-6 py-2 rounded-full bg-[#686666] text-white font-medium
              transition-all duration-700 ease-out
              ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
                    >
                        Shop now
                    </button>
                </div>
            </section>
        </>
    )
}
