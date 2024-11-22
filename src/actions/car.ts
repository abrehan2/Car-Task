'use server';

// Imports:
import prismaDB from '@/lib/prisma-config';
import { VehicleData } from '@/types';
import TryCatchBlock from '@/utils/try-catch';

const getCars = TryCatchBlock(async () => {
  const cars: Array<VehicleData> = await prismaDB.car.findMany({});
  return { success: true, cars };
});

export default getCars;
