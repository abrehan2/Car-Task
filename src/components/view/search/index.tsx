// Imports:
import { Input } from '@/components/ui/input';

export function Search({ onSearch }: { onSearch: (_query: string) => void }) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <div className="w-full sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto">
      <Input
        placeholder="Search vehicle, model, or type."
        onChange={handleInputChange}
      />
    </div>
  );
}
