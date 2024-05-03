import React from "react";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "flowbite-react/components/TextInput";

export default function Form() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <div className="pt-5">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="type your name..."
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="type your password..."
            />
            <Input
              label="name"
              type="password"
              id="password"
              placeholder="type your password..."
            />
          </div>
          <div className="mt-10">
            <button
              onClick={onSubmit}
              className="flex items-center gap-1 px-5 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
            >
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
