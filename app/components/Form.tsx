import React from "react";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import * as validate from "../utils/inputValidation";
export default function Form() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data: any) => {
    console.log("data", data);
  });

  return (
    <div className='pt-5'>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          className='container'
        >
          <div className='grid gap-5 grid-cols-2'>
            <Input {...validate.name_validation} />
            <Input {...validate.password_validation} />
            <Input {...validate.email_validation} />
            <Input {...validate.email_validation} />
            <Input
              {...validate.description_validation}
              multiline
              className='col-span-2 ...'
            />
          </div>
          <div className='mt-10'>
            <button
              onClick={onSubmit}
              className='flex items-center gap-1 px-5 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
            >
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
