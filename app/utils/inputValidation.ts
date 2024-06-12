export const name_validation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",
  placeholder: "type password ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "email",
  type: "email",
  id: "email",
  placeholder: "type email ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "invalid email",
    },
  },
};

export const description_validation = {
  name: "description",
  label: "description",
  type: "text",
  id: "description",
  placeholder: "write your description ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 200,
      message: "200 characters max",
    },
  },
};
