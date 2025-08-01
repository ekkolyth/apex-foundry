import legends from '@/data/legends.json';
import { LegendCard } from '@/components/legend-card';
import type { Legend } from '@/types/legend';

export default function LegendsPage() {
  return (
    <>
      {/* Wrapper div for the whole page */}
      <div className='relative space-y-10'>
        {/* Header section */}
        <div>
          <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-6xl font-[Duke] tracking-wide'>
              <span className='text-primary'>CHOOSE</span> YOUR LEGEND
            </h1>
            <div className='h-1 flex-1 bg-gradient-to-r from-primary to-transparent'></div>
          </div>
          <p className='text-zinc-400 text-lg max-w-2xl font-light tracking-wide'>
            Browse the full roster of Legends available in Apex. Tap a Legend to
            learn more and build your perfect squad.
          </p>
        </div>

        {/* Grid of legends */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {(legends as Legend[]).map((legend) => (
            <div
              key={legend.slug}
              className='transition-all duration-200 border-2 border-transparent hover:border-primary'
            >
              <LegendCard legend={legend} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
