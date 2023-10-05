<template>
  <!-- <div class=" mb-3" > -->
  <input
    :type="text"
    class="appearance-none block  bg-grey-lighter mt-2 mb-4 py-3 px-3 rounded-md bg-white border border-black-200 dark:border-black-200 text-black font-semibold focus:border-green-200 focus:outline-none"
    :id="exampleFormControlInput2"
    :placeholder="placeholder" />
  <label
    
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >
    {{ label }}
  </label>
<!-- </div> -->
</template>

<script>
/* eslint-disable no-console */
export default {
    name: "FormInput",
    props: {
        id: String,
      groupId: String,
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