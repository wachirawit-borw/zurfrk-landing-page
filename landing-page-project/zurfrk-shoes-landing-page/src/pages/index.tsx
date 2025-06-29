import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import dynamic from "next/dynamic";

const DynamicProduct = dynamic(() => import('@/components/Product'), {
  loading: () => (
    <div className="flex justify-center items-center h-96 text-xl">
      Loading products...
    </div>
  ),

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
