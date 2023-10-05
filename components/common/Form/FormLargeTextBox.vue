<template>
    <!-- <div class=" mb-3" > -->
        <textarea  id="id" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 h-40 focus:outline-none" ></textarea>
  </template>
  
  <script>
  /* eslint-disable no-console */
  export default {
      name: "FormInput",
      props: {
          id: String,
          rows: Number,
        type: String,
        label: String,
        type: String,
        description: {
          default: "",
          type: String,
        },
        isRequired: Boolean,
        trim: {
          default: false,
          type: Boolean,
        },
        placeholder: String,
        invalidFeedback: {
          default: "",
          type: String,
        },
        isTextArea: {
          default: false,
          type: Boolean,
        },
        isDisabled: {
          default: false,
          type: Boolean,
        },
        state: {
          default: null,
          type: Boolean,
        },
        form: {
          default: "",
          type: String,
        },
        whiteBG: {
          default: true,
          type: Boolean,
        },
        value: {
          default: null,
        },
        counter: {
          default: false,
          type: [Number, Boolean],
        },
      },
  };
  </script>
  
  <style scoped>
  
  </style>