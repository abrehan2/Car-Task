// Imports:
import getCars from '@/actions/car';
import { VehicleData } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useCars = () => {
  const [cars, setCars] = useState<VehicleData[]>([]);
  const [visibleCars, setVisibleCars] = useState<VehicleData[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      const data = await getCars();
      if ('success' in data && data.success) {
        setCars(data.cars);
        setVisibleCars(data.cars.slice(0, visibleCount));
      } else {
        console.error('Failed to fetch cars');
      }
      setIsLoading(false);
    };
    fetchCars();
  }, [visibleCount]);

  const handleSearch = (query: string) => {
    if (!query) {
      params.delete('search');
      router.push(`/?${params.toString()}`);
      setVisibleCars(cars.slice(0, visibleCount));
    } else {
      params.delete('search');
      const lowerCaseQuery = query.toLowerCase();

      const filtered = cars.filter(
        (car) =>
          car.vehicle.toLowerCase().includes(lowerCaseQuery) ||
          car.model.toLowerCase().includes(lowerCaseQuery) ||
          car.type.toLowerCase().includes(lowerCaseQuery) ||
          car.fuelType.toLowerCase().includes(lowerCaseQuery)
      );

      params.set('search', lowerCaseQuery);
      router.push(`/?${params.toString()}`);

      setVisibleCars(filtered.slice(0, visibleCount) ?? []);
    }
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 10;
      setVisibleCars(cars.slice(0, newCount));
      return newCount;
    });
  };

  return { visibleCars, handleSearch, loadMore, isLoading, params };
};

export default useCars;
