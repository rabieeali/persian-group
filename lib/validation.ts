import { FormErrors, FormState } from '@/components/consultation/consultation.types';

export function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) errors.fullName = "نام و نام خانوادگی الزامی است";
  if (!form.email.trim()) errors.email = "آدرس ایمیل الزامی است";
  if (!form.phone.trim()) errors.phone = " شماره تماس الزامی است";
  if (form.services.length === 0) errors.services = "حداقل یک سرویس انتخاب کنید";

  return errors;
}
