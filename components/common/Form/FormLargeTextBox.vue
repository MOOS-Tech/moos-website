<template>
    <!-- <div class=" mb-3" > -->
        <textarea  id="id" rows="rows" class="block  rounded-md border-0  mb-3 py-3 px-3  text-gray-900 shadow-sm w-72 h-36  placeholder:text-gray-400  sm:text-sm sm:leading-6  focus:outline-none" 
        :placeholder="placeholder"></textarea>
  </template>
  
  <script>
  /* eslint-disable no-console */
  export default {
      name: "FormInput",
      props: {
          id: String,
          rows: Number,
        type: String,
        placeholder: String,
        description: {
          default: "",
          type: String,
        },
        isRequired: Boolean,
        
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
       
      },
  };
  </script>
  
  <style scoped>
  
  </style>