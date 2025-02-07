import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { BeamBorder } from './beam-border';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const CardBlurry = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "p-8 bg-gradient2 border border-white/20 rounded-xl backdrop-blur-8.5 relative flex min-h-[130px] w-full flex-col overflow-hidden",
        className
      )}
    >
      {children}
      <BeamBorder size={250} duration={12} delay={9} colorFrom='#16AAE2' colorTo='#88C340'/>
    </div>
  );
};

export default CardBlurry;