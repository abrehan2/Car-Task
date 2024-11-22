// Imports:
import { Badge } from '@/components/ui/badge';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardWrapper,
} from '@/components/ui/card';
import { CardProps } from '@/types';

export function Card({ car }: CardProps) {
  return (
    <CardWrapper className="w-auto shadow-sm space-y-1">
      <CardHeader className="space-y-1">
        <CardTitle className="font-semibold text-xl">{car.vehicle}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-x-1">
        <Badge variant={'destructive'}>{car.fuelType}</Badge>
        <Badge variant={'destructive'}>{car.manufacturer}</Badge>
        <Badge variant={'destructive'}>{car.model}</Badge>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-gray-300">VIM-{car.vehicleIdentificationNumber}</p>
        <p className="text-gray-300">VIR-{car.vehicleRegistrationNumber}</p>
      </CardFooter>
    </CardWrapper>
  );
}
