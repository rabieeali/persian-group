'use client';

import { useState } from 'react';
import InputField from './InputField';
import CheckboxGroup from './CheckboxGroup';
import { servicesList } from '@/data/consultation';
import { FormErrors, FormState } from './consultation.types';
import { validateForm } from '@/lib/validation';
import { motion } from 'motion/react';

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (value: string) => {
    setForm((prev) => {
      const newServices = prev.services.includes(value) ? prev.services.filter((s) => s !== value) : [...prev.services, value];
      return { ...prev, services: newServices };
    });
    setErrors((prev) => ({ ...prev, services: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    await new Promise((res) => setTimeout(res, 2000));
    console.log('فرم ارسال شد:', form);

    setForm({
      fullName: '',
      email: '',
      phone: '',
      services: [],
      message: '',
    });
  };

  return (
    <section className='w-full flex flex-col items-center justify-center container px-4 xl:px-44'>
      <h2 className='text-lg md:text-xl font-bold text-center text-gray-900'>فرم دریافت مشاوره</h2>
      <p className='text-center text-gray-600 text-sm font-bold md:text-base leading-relaxed my-4'>
        برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید ؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت کاملا رایگان شما را راهنمایی کنند.
      </p>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className='w-full  bg-white rounded-xl border border-gray-300 p-4 md:p-8 flex flex-col gap-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10' dir='rtl'>
          <div className='flex flex-col md:flex-row justify-between gap-5'>
            <InputField
              label='نام و نام خانوادگی خود را وارد کنید'
              name='fullName'
              value={form.fullName}
              onChange={handleChange}
              placeholder='نام و نام خانوادگی'
              error={errors.fullName}
            />
            <InputField
              label='آدرس ایمیل خود را وارد کنید'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='مثل email@mail.com'
              error={errors.email}
            />
            <InputField
              label='شماره تماس خود را وارد کنید'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='مثل09121234567'
              error={errors.phone}
            />
          </div>

          <CheckboxGroup
            label='نوع سرویس های موردنظر خود را انتخاب کنید'
            options={servicesList}
            selectedValues={form.services}
            onChange={handleCheckboxChange}
            error={errors.services}
          />

          <div className='flex flex-col gap-4'>
            <label className='font-bold text-gray-800 text-sm'>در مورد درخواست خود برای ما بنویسید.</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              className='border border-gray-300 bg-gray-100 rounded-xl py-3 px-4 text-sm h-44 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='توضیحات (اختیاری)'></textarea>
          </div>

          <button
            type='submit'
            className='w-fit px-16 bg-black/90 hover:bg-black/75 cursor-pointer transition text-white py-2 mx-auto rounded-full text-sm font-medium'>
            ثبت درخواست
          </button>
        </form>
      </motion.div>
    </section>
  );
}
