// Imports:
import getCars from '@/actions/car';
import { VehicleData } from '@/types';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState<VehicleData[]>([]);
  const [visibleCars, setVisibleCars] = useState<VehicleData[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars();
      if ('success' in data && data.success) {
        setCars(data.cars);
        setVisibleCars(data.cars.slice(0, visibleCount));
      }
    };
    fetchCars();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setVisibleCars(cars.slice(0, visibleCount));
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = cars.filter(
        (car) =>
          car.vehicle.toLowerCase().includes(lowerCaseQuery) ||
          car.model.toLowerCase().includes(lowerCaseQuery) ||
          car.type.toLowerCase().includes(lowerCaseQuery)
      );
      setVisibleCars(filtered.slice(0, visibleCount));
    }
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 10;
      setVisibleCars(cars.slice(0, newCount));
      return newCount;
    });
  };

  return { cars, visibleCars, handleSearch, loadMore };
};

export default useCars;
