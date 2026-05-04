import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const NEW_DOCTORS = [
  { name: "Dr. Aditi Agarwal", specialization: "General Surgeon", gender: "F", qualifications: "MBBS, MS (Surgery)", fees: 600, experience: 10 },
  { name: "Dr. Arun Dubey", specialization: "General Physician", gender: "M", qualifications: "MBBS, MD (General Medicine)", fees: 500, experience: 22 },
  { name: "Dr. Divya Baang", specialization: "General Physician", gender: "F", qualifications: "MBBS", fees: 400, experience: 8 },
  { name: "Dr. Kavita Vishwakarma", specialization: "General Physician", gender: "F", qualifications: "MBBS", fees: 400, experience: 7 },
  { name: "Dr. Nikhil Agarwal", specialization: "General Physician", gender: "M", qualifications: "MBBS, MD", fees: 500, experience: 14 },
  { name: "Dr. Sonal Gohil", specialization: "General Physician", gender: "F", qualifications: "MBBS", fees: 400, experience: 11 },
  { name: "Dr. Swati Bamane", specialization: "Gynaecologist & Obstetrician (MS)", gender: "F", qualifications: "MBBS, MS (Obs & Gyn)", fees: 500, experience: 13 },
  { name: "Dr. Vijay Sharnangat", specialization: "General Physician", gender: "M", qualifications: "MBBS, MD", fees: 500, experience: 20 },
];

async function main() {
  console.log('🌱 Seeding specific hospital doctors...');
  
  const passwordHash = await bcrypt.hash('doctor123456', 12);

  for (const doc of NEW_DOCTORS) {
    const email = doc.name.toLowerCase().replace(/ /g, '.').replace(/\./, '') + '@hitanshihospital.com';
    
    // Create User
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        name: doc.name,
        email,
        passwordHash,
        role: 'DOCTOR',
        isVerified: true,
      },
    });

    // Create Doctor Profile
    await prisma.doctor.upsert({
      where: { userId: user.id },
      update: {
        specialization: doc.specialization,
        gender: doc.gender,
        qualifications: doc.qualifications,
        fees: doc.fees,
        experience: doc.experience,
      },
      create: {
        userId: user.id,
        specialization: doc.specialization,
        gender: doc.gender,
        qualifications: doc.qualifications,
        fees: doc.fees,
        experience: doc.experience,
        city: 'Mira Road',
        state: 'Maharashtra',
        hospital: 'Hitanshi Hospital',
        bio: `${doc.name} is a dedicated ${doc.specialization} at Hitanshi Hospital with ${doc.experience} years of experience.`,
      },
    });
    
    console.log(`✅ Seeded: ${doc.name}`);
  }

  console.log('🎉 Hospital doctors seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
