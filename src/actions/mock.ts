'use server';

// Imports:
import prismaDB from '@/libs/prisma-config';
import TryCatchBlock from '@/utils/try-catch';
import { faker } from '@faker-js/faker';

export const generateSeed = TryCatchBlock(async (_req, res) => {
  for (let i = 0; i < 100; i++) {
    await prismaDB.car.create({
      data: {
        color: faker.vehicle.color(),
        fuelType: faker.vehicle.fuel(),
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        vehicle: faker.vehicle.vehicle(),
        vehicleIdentificationNumber: faker.vehicle.vin(),
        vehicleRegistrationNumber: faker.vehicle.vrm(),
      },
    });
  }

  res.status(200).json({ message: 'Seed generated successfully' });
});
