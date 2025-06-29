import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import LoadingSpinner from "@/components/Loading"
import "swiper/css";
import "swiper/css/navigation";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price?: number;
};

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {

        const response = await fetch("/api/products");

        const data = await response.json();

        setProducts(data);
      } catch (error) {

        console.error("Failed to fetch products:", error);
      } finally {

        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
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
          {products.map((product) => (

            <SwiperSlide key={product.id} style={{ width: '300px', height: '400px' }}>
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
                <Image

                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"

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
