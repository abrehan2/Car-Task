'use server';

// Imports:
import prismaDB from '@/lib/prisma-config';
import TryCatchBlock from '@/utils/try-catch';

const getCars = TryCatchBlock(async () => {
  const cars = await prismaDB.car.findMany({});
  return { success: true, cars };
});

export default getCars;
