<template>
    <select id="id" name="name" autocomplete="autocomplete" class=" mb-3 py-2 px-3  focus:border-green-200 focus:outline-none block w-full rounded-md border-0   text-black-100 shadow-sm ">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
</template>
<script>
/* eslint-disable no-console */
export default {
    name: "FormInput",
    props: {
        id: String,
     
      name: String,
      autocomplete: String,
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