'use server';

// Imports:
import prismaDB from '@/lib/prisma-config';
import TryCatchBlock from '@/utils/try-catch';
import { faker } from '@faker-js/faker';
import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();
let seedTriggered = false;

const generateSeed = TryCatchBlock(async () => {
  if (seedTriggered) {
    return { success: true, message: 'Seed already generated' };
  }

  for (let i = 0; i < 50; i++) {
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

  seedTriggered = true;
  return { message: 'Seed generated' };
});

const triggerSeed = () => {
  eventEmitter.once('generateSeed', generateSeed);
  eventEmitter.emit('generateSeed');
};

export default triggerSeed;
