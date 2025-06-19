# 🏆 ZURFRK Portfolio Website

เว็บไซต์นี้คือ **เว็บสะสมผลงาน (Portfolio)** ของผู้ใช้งานแบรนด์ **wachirawit borwonsuk**  
นำเสนอทั้งดีไซน์ ความสามารถ และตัวอย่างงานผ่านหน้า Landing Page สุดทันสมัย

---

## 🎯 วัตถุประสงค์

- นำเสนอแบรนด์ ZURFRK ด้วยภาพลักษณ์ที่เรียบหรู ทันสมัย
- ทดลองและแสดงความเข้าใจในเครื่องมือ Frontend ที่เรียนรู้มา
- สร้าง Landing Page ที่ใช้งานได้จริง พร้อม responsive และ SEO friendly

---

## 🛠️ เทคโนโลยีที่ใช้

| เทคโนโลยี | รายละเอียด |
|-----------|-------------|
| **React** | สร้าง UI ที่ประกอบด้วย Component แบบ reusable |
| **TypeScript** | เพิ่มความปลอดภัยด้านชนิดข้อมูล พร้อมตรวจจับ error ตั้งแต่ compile time |
| **Next.js (App Router)** | จัดการ routing, static optimization และ performance |
| **Tailwind CSS** | จัดการ layout และ design แบบ utility-first |
| **HTML5 + CSS3** | โครงสร้างพื้นฐานของหน้าเว็บ |
| **Video Fallback Logic** | ใช้วิดีโอเป็น background และ fallback เป็นรูปภาพเมื่อเล่นไม่ได้ |
| **Responsive Design** | รองรับการแสดงผลทุกขนาดหน้าจอ |
| **Lighthouse Optimization** | พัฒนาโดยคำนึงถึง SEO, accessibility และ performance |

---

## 🎬 ฟีเจอร์เด่น

- **พื้นหลังแบบวิดีโอ + รูป fallback**
  - วิดีโอแสดงเป็นพื้นหลังในหน้า Hero section
  - ถ้า browser ไม่รองรับ video หรือช้า → แสดงรูปภาพแทนอัตโนมัติ
- **Component แยกชัดเจน**
  - เช่น `ImageBox`, `Feature`, `FooterBlock`, `FooterList`
- **เมนู Navigation ทั้ง desktop และ mobile**
  - มี dropdown สำหรับ mobile พร้อม toggle ได้ด้วย `useState`
- **SEO-Friendly**
  - ใช้ `alt` อย่างถูกต้องใน `<Image>`
  - ใช้ semantic HTML (`<section>`, `<header>`, `<footer>`)

---

## 📱 Responsive ครอบคลุม

- Mobile (≤ 640px)
- Tablet (≥ 768px)
- Desktop (≥ 1024px)
- ใช้ Tailwind breakpoint เช่น `sm:`, `md:`, `lg:`

---

## 📌 หมายเหตุ

- วิดีโอ `.webm` จะถูก preload ด้วย `<video preload="auto" />`  
- การ fallback เป็น `<Image>` จะใช้ `useEffect` เพื่อตรวจสอบความสามารถของเบราว์เซอร์

---

## 👨‍🎓 ผู้พัฒนา

**ZURFRK**  
Fullstack Frontend  
โปรเจกต์จริงเพื่อฝึก React + Next.js + Tailwind

---
