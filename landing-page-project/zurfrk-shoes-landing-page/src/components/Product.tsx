import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
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
      {/* เพิ่ม gradient background หรือสีพื้นหลังที่ต้องการ */}
      <section className="bg-gradient-to-r from-[#f0cca8] to-[#ccdef5] py-16">
        <Swiper
          // 1. เพิ่ม EffectCoverflow เข้าไปใน modules
          modules={[Navigation, Autoplay, EffectCoverflow]}

          // 2. กำหนด effect เป็น 'coverflow'
          effect={"coverflow"}

          // 3. ตั้งค่าสำหรับ Coverflow Effect โดยเฉพาะ
          coverflowEffect={{
            rotate: 20,       // การเอียงของสไลด์ด้านข้าง
            stretch: 0,       // ระยะห่างระหว่างสไลด์ (0 คือชิดกัน)
            depth: 100,       // ความลึก (ยิ่งเยอะยิ่งดูไกล)
            modifier: 1,      // ตัวคูณเอฟเฟกต์ (1 คือค่าปกติ)
            slideShadows: true, // แสดงเงาใต้สไลด์เพื่อเพิ่มมิติ
          }}

          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"} // ตั้งเป็น 'auto' เพื่อให้ขนาดพอดี
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper" // อาจจะตั้งชื่อ class ไว้เผื่อแต่งสไตล์เพิ่มเติม
        >
          {shoes.map((item, index) => (
            // กำหนดขนาดของ SwiperSlide ให้ชัดเจน
            <SwiperSlide key={index} style={{ width: '300px', height: '400px' }}>
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill // ใช้ fill="true" เพื่อให้ภาพเต็ม container
                  className="object-cover"
                />
                {/* คุณสามารถเพิ่ม Text หรือปุ่มต่างๆ บนรูปได้ที่นี่ */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}