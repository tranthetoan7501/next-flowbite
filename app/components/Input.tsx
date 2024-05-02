import { init } from "next/dist/compiled/webpack/webpack";
import { exit } from "process";
import React from "react";
import { useFormContext } from "react-hook-form";
interface InputProps {
  label: string;
  type?: string;
  id?: string;
  placeholder?: string;
}
export default function Input({ label, type, id, placeholder }: InputProps) {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col w-96 h-14 gap-2'>
      <div className='flex justify-between'>
        <label htmlFor={id} className='font-semibold capitalize'>
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className='w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
        placeholder={placeholder}
        {...register(label, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
    </div>
  );
}
const framer_error = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
  transition: {
    duration: 0.2,
  },
};
