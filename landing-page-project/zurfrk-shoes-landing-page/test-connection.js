const { PrismaClient } = require('@prisma/client');

async function main() {
  // ❗ นำ DATABASE_URL จากหน้าเว็บ Vercel มาวางที่นี่เท่านั้น
  const vercel_database_url = "postgresql://postgres:Muchisama%401@db.ikcygoqpuyxzptqquntc.supabase.co:5432/postgres?sslmode=require";

  console.log("กำลังทดสอบ Connection String จาก Vercel...");
  const prisma = new PrismaClient({
    datasources: { db: { url: vercel_database_url } },
  });

  try {
    await prisma.$connect();
    console.log("✅ สำเร็จ! Connection String ที่อยู่ใน Vercel ใช้งานได้ถูกต้อง");
  } catch (error) {
    console.error("❌ ล้มเหลว! Connection String บน Vercel มีปัญหา นี่คือ Error:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
main();