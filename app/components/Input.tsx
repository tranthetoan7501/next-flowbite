import { init } from "next/dist/compiled/webpack/webpack";
import { exit } from "process";
import React from "react";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid ";
import cn from "classnames";
import { Textarea } from "flowbite-react";
interface InputProps {
  label: string;
  name: string;
  type?: string;
  id?: string;
  placeholder?: string;
  validation?: any;
  multiline?: boolean;
  className?: string;
}
export default function Input({
  label,
  name,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className={cn("flex flex-col gap-2 mt-5", className)}>
      <div className='flex justify-between'>
        <label htmlFor={id} className='font-semibold capitalize'>
          {label}
        </label>
        {isInvalid && (
          <InputError
            message={errors[name] && errors[name].message}
            key={name}
          />
        )}
      </div>
      {multiline ? (
        <Textarea
          id={id}
          className='h-40 p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
          rows={4}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className='w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
}

const InputError = ({ message }: { message: any }) => {
  return (
    <p
      className='flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md'
      {...framer_error}
    >
      {message}
    </p>
  );
};
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
