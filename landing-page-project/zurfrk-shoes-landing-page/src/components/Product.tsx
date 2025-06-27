// 1. เพิ่มการ import 'useState' และ 'useEffect' เข้ามา
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// (แนะนำ) 4. กำหนด Type ของข้อมูลสินค้าให้ชัดเจน
// เพื่อให้โค้ดของเราปลอดภัยและเดาได้ง่ายว่า object 'product' มีหน้าตาอย่างไร
type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price?: number; // ใส่ ? ถ้าข้อมูลนี้อาจจะไม่มีก็ได้
};

export default function Product() {
  // 2. ลบ hardcoded array 'shoes' ทิ้งไป
  // แล้วสร้าง state สำหรับเก็บข้อมูลสินค้าที่จะได้จาก API และสถานะ loading
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 3. ใช้ useEffect เพื่อสั่งให้ดึงข้อมูลจาก API แค่ครั้งเดียวตอน component โหลดขึ้นมา
  useEffect(() => {
    // สร้างฟังก์ชัน async ภายใน useEffect เพื่อให้เราสามารถใช้ await ได้
    const fetchProducts = async () => {
      try {
        // ยิง GET request ไปยัง API ที่เราสร้างไว้
        const response = await fetch("/api/products");
        // แปลงข้อมูลที่ตอบกลับมาเป็น JSON
        const data = await response.json();
        // นำข้อมูลที่ได้มาใส่ใน state 'products' เพื่อนำไปใช้แสดงผล
        setProducts(data);
      } catch (error) {
        // หากเกิดข้อผิดพลาดในการดึงข้อมูล ให้แสดง log ใน console
        console.error("Failed to fetch products:", error);
      } finally {
        // ไม่ว่าจะดึงข้อมูลสำเร็จหรือล้มเหลว ให้หยุดการ loading
        // เพื่อให้หน้าเว็บแสดงผลข้อมูล (หรือข้อความ error) ต่อไป
        setLoading(false);
      }
    };

    fetchProducts(); // เรียกใช้งานฟังก์ชันดึงข้อมูล
  }, []); // การใส่ [] ว่างเปล่า หมายถึงให้ effect นี้ทำงานแค่ครั้งแรกครั้งเดียวที่ component ถูก render

  // 5. เพิ่มการแสดงผลระหว่างที่กำลังโหลดข้อมูล
  // เป็นการสร้าง UX ที่ดี ทำให้ผู้ใช้รู้ว่ากำลังมีอะไรเกิดขึ้น
  if (loading) {
    return (
      <section className="flex justify-center items-center h-96 bg-gradient-to-r from-[#f0cca8] to-[#ccdef5] py-16 text-center text-xl font-semibold">
        <h2>Loading Products...</h2>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#f0cca8] to-[#ccdef5] py-16">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 30,
            stretch: 3,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {/* 6. เปลี่ยนจากการ map 'shoes' มาเป็น map 'products' ที่ได้มาจาก state */}
          {products.map((product) => (
            // 8. ใช้ product.id เป็น key ซึ่งดีกว่า index เพราะเป็นค่าที่ไม่ซ้ำกันแน่นอน
            <SwiperSlide key={product.id} style={{ width: '300px', height: '400px' }}>
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  // 7. เปลี่ยนมาใช้ข้อมูลจาก object 'product' ที่มาจากฐานข้อมูลของเรา
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  // เพิ่ม onError เผื่อกรณีรูปภาพโหลดไม่สำเร็จ
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/300x400/f0cca8/ccdef5?text=Image+Error';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
