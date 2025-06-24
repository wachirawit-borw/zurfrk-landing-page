import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import CSS ของ Swiper
import "swiper/css";
import "swiper/css/navigation";

export default function Product() {
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
      <section className="bg-[#ebc8a8] py-16">
        {/* ไม่จำเป็นต้องใช้ div ครอบอีกชั้นก็ได้ แต่ถ้ามีก็ไม่เป็นไร */}
        <Swiper
          // เพิ่ม className นี้เพื่อช่วยเรื่องการจัดระยะห่าง
          className="swiper-container-horizontal" 
          modules={[Navigation, Autoplay]}
          navigation
          loop
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10} // อาจจะลด spaceBetween ลงเล็กน้อย
          slidesPerView={1.2} // ปรับให้เห็นสไลด์ด้านข้างมากขึ้นบนมือถือ
          breakpoints={{
            // เมื่อหน้าจอกว้าง 768px ขึ้นไป
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // เมื่อหน้าจอกว้าง 1024px ขึ้นไป
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {shoes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  // แก้ไข className เพื่อให้มั่นใจว่ารูปภาพมีขนาดเท่ากันเสมอ
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}