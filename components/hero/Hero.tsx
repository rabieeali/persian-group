import Image from 'next/image';
import { HeroProps } from './Hero.types';
import Link from 'next/link';

export default function Hero({ header, body, footer, imageUrl }: HeroProps) {
  return (
    <section className='w-full bg-white'>

      <div className='py-16 container xl:px-44 mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6'>
        <div className='flex-1 space-y-4 text-center md:text-right'>
          <h1 className='text-lg md:text-2xl font-bold leading-tight'>{header}</h1>
          <p className='text-gray-700 text-sm md:text-lg font-medium'>{body}</p>
          <p className='text-gray-500 text-xs md:text-base'>{footer}</p>
          <div className='mt-6 flex justify-center md:justify-start'>
            <Link href='#' className='w-fit px-6 py-3 text-white rounded-lg bg-purple-600 hover:bg-purple-700 transition cursor-pointer'>
              دریافت مشاوره
            </Link>
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <Image src={imageUrl} alt='hero-image' width={500} height={400} className='rounded-xl object-cover' priority />
        </div>
      </div>
    </section>
  );
}
