import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
// 1. เพิ่มการ import 'dynamic' เข้ามา
import dynamic from "next/dynamic";

// 2. ใช้ dynamic() เพื่อโหลด Product Component แบบ Lazy Loading
//    โค้ด JavaScript ของ Product และ Swiper จะถูกโหลดเมื่อจำเป็นเท่านั้น
const DynamicProduct = dynamic(() => import('@/components/Product'), {
  // เพิ่มหน้า Loading ขณะที่ Component กำลังจะถูกโหลด
  loading: () => (
    <div className="flex justify-center items-center h-96 text-xl">
      Loading products...
    </div>
  ),
  // ssr: false บอกว่าไม่ต้อง render component นี้ที่ฝั่ง server
  // เหมาะสำหรับ library ที่ต้องทำงานกับ browser เท่านั้นอย่าง Swiper
  ssr: false, 
});

const DynamicContact = dynamic(() => import('@/components/Contact'));
const DynamicAbout = dynamic(() => import('@/components/About'));
const DynamicFooter = dynamic(() => import('@/components/Footer'));


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <DynamicProduct />
      <DynamicContact />
      <DynamicAbout />
      <DynamicFooter />
    </>
  )
}
