// Imports:
import getCars from '@/actions/car';
import { VehicleData } from '@/types';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState<VehicleData[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      if ('success' in data && data.success) {
        setCars(data?.cars);
      } else {
        console.error('Failed to fetch cars.');
      }
    };

    fetchCars();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setCars((prevCars) => [...prevCars]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      setCars((prevCars) =>
        prevCars.filter(
          (car) =>
            car.vehicle.toLowerCase().includes(lowerCaseQuery) ||
            car.model.toLowerCase().includes(lowerCaseQuery) ||
            car.type.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  };

  return { cars, handleSearch };
};

export default useCars;
