import 'dotenv/config';
process.env.DATABASE_URL = process.env.DATABASE_URL || "file:./dev.db";
import { PrismaClient } from '@prisma/client';
import { Role, Gender } from '../src/common/constants';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const SPECIALIZATIONS = [
  'Cardiology',
  'Dermatology',
  'Endocrinology',
  'Gastroenterology',
  'General Medicine',
  'Gynecology',
  'Neurology',
  'Oncology',
  'Ophthalmology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Pulmonology',
  'Urology',
];

const CITIES = [
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Delhi', state: 'Delhi' },
  { city: 'Bangalore', state: 'Karnataka' },
  { city: 'Hyderabad', state: 'Telangana' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Pune', state: 'Maharashtra' },
  { city: 'Ahmedabad', state: 'Gujarat' },
];

const HOSPITALS = [
  'Apollo Hospital',
  'Fortis Healthcare',
  'Max Super Speciality',
  'AIIMS',
  'Medanta',
  'Narayana Health',
  'Manipal Hospital',
  'Kokilaben Hospital',
  null,
];

const FIRST_NAMES_MALE = [
  'Rajesh', 'Amit', 'Suresh', 'Vikram', 'Arun',
  'Sanjay', 'Deepak', 'Ashish', 'Rohit', 'Manoj',
];

const FIRST_NAMES_FEMALE = [
  'Priya', 'Sunita', 'Meera', 'Kavita', 'Anita',
  'Neha', 'Pooja', 'Swati', 'Ritu', 'Divya',
];

const LAST_NAMES = [
  'Sharma', 'Patel', 'Gupta', 'Singh', 'Kumar',
  'Reddy', 'Joshi', 'Verma', 'Mehta', 'Agarwal',
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.appointment.deleteMany();
  await prisma.availability.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123456', 12);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@medibook.com',
      passwordHash: adminPassword,
      role: Role.ADMIN,
      isVerified: true,
    },
  });
  console.log(`✅ Admin user created: ${admin.email}`);

  // Create patient users
  const patientPassword = await bcrypt.hash('patient123456', 12);
  const patients = [];
  for (let i = 1; i <= 5; i++) {
    const patient = await prisma.user.create({
      data: {
        name: `Patient ${i}`,
        email: `patient${i}@medibook.com`,
        passwordHash: patientPassword,
        role: Role.PATIENT,
        phone: `+91${randomInt(7000000000, 9999999999)}`,
        isVerified: true,
      },
    });
    patients.push(patient);
  }
  console.log(`✅ ${patients.length} patient users created`);

  // Create doctor users + profiles
  const doctorPassword = await bcrypt.hash('doctor123456', 12);
  const doctors = [];

  for (let i = 0; i < 20; i++) {
    const gender = Math.random() > 0.5 ? Gender.MALE : Gender.FEMALE;
    const firstName = gender === Gender.MALE
      ? randomItem(FIRST_NAMES_MALE)
      : randomItem(FIRST_NAMES_FEMALE);
    const lastName = randomItem(LAST_NAMES);
    const name = `Dr. ${firstName} ${lastName}`;
    const location = randomItem(CITIES);
    const specialization = randomItem(SPECIALIZATIONS);
    const experience = randomInt(3, 25);
    const fees = randomInt(300, 2000);
    const rating = parseFloat((3.5 + Math.random() * 1.5).toFixed(1));

    const user = await prisma.user.create({
      data: {
        name,
        email: `doctor${i + 1}@medibook.com`,
        passwordHash: doctorPassword,
        role: Role.DOCTOR,
        phone: `+91${randomInt(7000000000, 9999999999)}`,
        isVerified: true,
      },
    });

    const qualifications = ['MBBS'];
    if (Math.random() > 0.3) qualifications.push('MD');
    if (Math.random() > 0.6) qualifications.push('DM');
    if (Math.random() > 0.8) qualifications.push('FRCS');

    const doctor = await prisma.doctor.create({
      data: {
        userId: user.id,
        specialization,
        qualifications: qualifications.join(', '),
        experience,
        bio: `${name} is a highly experienced ${specialization} specialist with ${experience} years of practice. Known for providing compassionate and thorough patient care.`,
        fees,
        rating,
        reviewCount: randomInt(10, 500),
        gender,
        city: location.city,
        state: location.state,
        hospital: randomItem(HOSPITALS),
        isActive: true,
      },
    });

    // Create availability for next 14 days
    const today = new Date();
    for (let day = 0; day < 14; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() + day);
      date.setHours(0, 0, 0, 0);

      // Skip some days randomly (simulate days off)
      if (Math.random() < 0.2) continue;

      const morningSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
      const afternoonSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

      const allSlots = [...morningSlots, ...afternoonSlots];
      // Randomly select some slots
      const selectedSlots = allSlots.filter(() => Math.random() > 0.3);

      for (const startTime of selectedSlots) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const endMinutes = hours * 60 + minutes + 30;
        const endHours = Math.floor(endMinutes / 60);
        const endMins = endMinutes % 60;
        const endTime = `${String(endHours).padStart(2, '0')}:${String(endMins).padStart(2, '0')}`;

        await prisma.availability.create({
          data: {
            doctorId: doctor.id,
            date,
            startTime,
            endTime,
            isBooked: false,
          },
        });
      }
    }

    doctors.push(doctor);
  }

  console.log(`✅ ${doctors.length} doctor profiles created with availability slots`);
  console.log('\n📋 Login credentials:');
  console.log('  Admin:   admin@medibook.com / admin123456');
  console.log('  Patient: patient1@medibook.com / patient123456');
  console.log('  Doctor:  doctor1@medibook.com / doctor123456');
  console.log('\n🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
