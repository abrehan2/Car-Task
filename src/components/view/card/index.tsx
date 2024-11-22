// Imports:
import getCars from '@/actions/car';

export async function Card() {
  const data = await getCars();
  return <div>This is a card component</div>;
}
