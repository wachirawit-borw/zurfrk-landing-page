import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function Product() {
    // ไม่จำเป็นต้องมี width, height ในนี้แล้ว
    const shoes = [
        { src: "/picture/shoes-image1.webp", alt: "Shoe 1" },
        { src: "/picture/shoes-image2.webp", alt: "Shoe 2" },
        { src: "/picture/shoes-image3.webp", alt: "Shoe 3" },
        { src: "/picture/shoes-image4.webp", alt: "Shoe 4" },
        { src: "/picture/shoes-image5.webp", alt: "Shoe 5" },
        { src: "/picture/shoes-image6.webp", alt: "Shoe 6" },
    ];

    return (
        <>
            <section className="bg-[#edc6a1] py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
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
                            // ✅ Step 1: เพิ่ม class ให้ SwiperSlide
                            <SwiperSlide key={index} className="relative aspect-square rounded-lg overflow-hidden">
                                {/* ✅ Step 2 & 3: เปลี่ยนมาใช้ fill และ object-cover */}
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}