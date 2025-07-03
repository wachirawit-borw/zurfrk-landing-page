"use client";

import { useInView } from 'react-intersection-observer';
// ✅ 1. Import useState และ useEffect เพิ่มเข้ามา
import { useState, useEffect, type ReactNode } from 'react';

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimateOnScroll({ children, className = '' }: AnimateOnScrollProps) {
  // ✅ 2. เพิ่ม State เพื่อเช็คว่า Component ถูกโหลดบน Client แล้วหรือยัง
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ 3. ถ้ายังไม่ Mount บน Client ให้ return null ไปก่อน
  if (!hasMounted) {
    return null;
  }

  // เมื่อ Mount แล้ว ถึงจะ render div พร้อม animation
  return (
    <div
      ref={ref}
      className={`scroll-animate ${inView ? 'scroll-animate-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}