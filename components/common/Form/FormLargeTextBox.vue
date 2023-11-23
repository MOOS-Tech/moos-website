<template>
    <div class=" mb-3" >
        <textarea  id="id" rows="rows" 
        :class="{
      'block  rounded-md border-0  mb-3 py-3 px-3  text-gray-900 shadow-sm w-72 h-36  placeholder:text-gray-400  sm:text-sm sm:leading-6  focus:outline-none': true,
      'border-red-500': hasFormBeenSubmitted && !isInputValid,

    }" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
    @change="$emit('update:modelValue', $event.target.value)"></textarea>
    <p class="text-red-500 text-sm">{{ validationErrorMessage }}</p>
    </div>
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
        value: { type: String, required: false, default: '' },
    modelValue: String,
    validationErrorMessage: String,
    isFormSubmitted: Boolean,
       
      },
      model: {
    prop: "value",
    event: "update"
  },
  data() {
    return {
      isInputValid: true,
      hasFormBeenSubmitted: false,
    };
  },
  watch: {
    isFormSubmitted(value) {
      this.hasFormBeenSubmitted = value;

      if (value) {
        this.isInputValid = true;
      }
    },
  },
  methods: {
    onInput(event) {

      this.isInputValid = true;
      this.$emit('update:modelValue', event.target.value);
    },
  },
  };
  </script>
  
  <style scoped>
  
  </style>