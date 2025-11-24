'use client';

import Image from 'next/image';
import { heroData } from '@/data/hero';
import { motion } from "motion/react"

export default function HeroBanner() {
  const { imageUrl } = heroData;
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1,  transition: { duration: 0.5 }}} className='flex-1 flex justify-center'>
      <Image src={imageUrl} alt='hero-image' width={500} height={400} className='rounded-xl object-cover' priority />
    </motion.div>
  );
}
