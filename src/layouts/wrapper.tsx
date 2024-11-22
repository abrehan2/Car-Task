// Imports:
import { cn } from '@/lib/utils';

export function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <div className={cn('w-full max-w-full', className)}>{children}</div>;
}
