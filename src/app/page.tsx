// Imports:
import { Card } from '@/components/view/card';
import { Search } from '@/components/view/search';
import { Wrapper } from '@/layouts/wrapper';

export default function Home() {
  return (
    <Wrapper className="space-y-10 p-10">
      <Search />
      <Card />
    </Wrapper>
  );
}
