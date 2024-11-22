// Imports:
import getCars from '@/actions/car';
import { Card } from '@/components/view/card';
import { Search } from '@/components/view/search';
import { MasonaryWrapper } from '@/layouts/masonary';
import { Wrapper } from '@/layouts/wrapper';
import { VehicleData } from '@/types';
import ErrorHandler from '@/utils/error';

export default async function Home() {
  const data = await getCars();

  if (data instanceof ErrorHandler) {
    console.error('ERROR: ', data.message);
  }

  return (
    <Wrapper className="space-y-10 p-10">
      <Search />
      <MasonaryWrapper>
        {!(data instanceof ErrorHandler) &&
          data.cars.map((car: VehicleData) => <Card key={car.id} car={car} />)}
      </MasonaryWrapper>
    </Wrapper>
  );
}
