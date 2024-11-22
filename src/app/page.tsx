'use client';

// Imports:
import { Button } from '@/components/ui/button';
import { Card } from '@/components/view/card';
import { Loader } from '@/components/view/loader';
import { Search } from '@/components/view/search';
import useCars from '@/hooks/useCars';
import { MasonaryWrapper } from '@/layouts/masonary';
import { Wrapper } from '@/layouts/wrapper';
import { VehicleData } from '@/types';
import { motion } from 'framer-motion';

export default function Home() {
  const { visibleCars, handleSearch, loadMore } = useCars();

  return (
    <Wrapper className="space-y-10 p-10">
      <Search onSearch={handleSearch} />
      {visibleCars.length > 0 ? (
        <>
          <MasonaryWrapper>
            {visibleCars.map((car: VehicleData) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 25,
                  delay: 0.1 * visibleCars.indexOf(car),
                }}
              >
                <Card car={car} />
              </motion.div>
            ))}
          </MasonaryWrapper>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button onClick={loadMore} variant={'secondary'}>
              Load More
            </Button>
          </motion.div>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}
