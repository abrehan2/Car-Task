'use client';

// Imports:
import dynamic from 'next/dynamic';

// Dynamic imports:
const Masonry = dynamic(() => import('react-layout-masonry'), { ssr: false });

export function MasonaryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 3 }} gap={16}>
      {children}
    </Masonry>
  );
}
