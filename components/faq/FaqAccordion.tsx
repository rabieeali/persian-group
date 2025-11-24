'use client';

import { faqs } from '@/data/faq';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function FaqAccordion() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggle = (id: number) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className='container px-4 xl:px-44 bg-white mt-16'>
      <section className='w-full mx-auto py-16 flex flex-col md:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1 text-center md:text-right'>
          <h2 className='text-3xl font-bold'>FAQ</h2>
          <h3 className='text-2xl font-bold'>سوالات متداولی که از ما می‌پرسید</h3>
          <p className='text-base text-gray-500'>سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده اند:</p>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className='flex-2 flex flex-col gap-4'>
          {faqs.map((faq) => (
            <div key={faq.id} className='border border-gray-300 rounded-xl overflow-hidden'>
              <button
                onClick={() => toggle(faq.id)}
                className='w-full flex justify-between items-center p-4 bg-gray-100 text-gray-800 font-bold hover:bg-gray-200 transition'>
                {faq.question}
                <span className='text-xl'>{openIds.includes(faq.id) ? '-' : '+'}</span>
              </button>

              {openIds.includes(faq.id) && <div className='p-4 bg-white text-gray-700 text-sm'>{faq.answer}</div>}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
