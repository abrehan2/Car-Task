'use client';

// Imports:
import { Card } from '@/components/view/card';
import { Loader } from '@/components/view/loader';
import { Search } from '@/components/view/search';
import useCars from '@/hooks/useCars';
import { MasonaryWrapper } from '@/layouts/masonary';
import { Wrapper } from '@/layouts/wrapper';
import { VehicleData } from '@/types';

export default function Home() {
  const { cars, handleSearch } = useCars();
  return (
    <Wrapper className="space-y-10 p-10">
      <Search onSearch={handleSearch} />
      {cars.length > 0 ? (
        <MasonaryWrapper>
          {cars.map((car: VehicleData) => (
            <Card key={car.id} car={car} />
          ))}
        </MasonaryWrapper>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}
