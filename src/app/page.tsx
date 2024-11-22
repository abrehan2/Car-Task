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

export default function Home() {
  const { visibleCars, handleSearch, loadMore } = useCars();

  return (
    <Wrapper className="space-y-10 p-10">
      <Search onSearch={handleSearch} />
      {visibleCars.length > 0 ? (
        <>
          <MasonaryWrapper>
            {visibleCars.map((car: VehicleData) => (
              <Card key={car.id} car={car} />
            ))}
          </MasonaryWrapper>
          <div className="flex justify-center w-full">
            <Button onClick={loadMore} variant={'secondary'}>
              Load More
            </Button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}
