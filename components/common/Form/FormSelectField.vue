<template>
  <div class="mb-3">
  <select id="id" name="name" autocomplete="autocomplete"
  :class="{
        'rounded-[4px] border pl-2 hover:outline-none focus:outline-none hover:border-green-200 h-10 w-72 sm:text-sm': true,
        'border-red-500': hasFormBeenSubmitted && !isInputValid,
      }"
          v-model="selected" @input="onInput"   @change="$emit('update:modelValue', $event.target.value)" >
    <option :disabled="true" :value="''">{{ placeholder }}</option>
    <option
        v-for="(option, index) in options"
        :key="index"
        :value="option">{{ option }}
    </option>
  </select>
  <p class="text-red-500 text-sm">{{ validationErrorMessage }}</p>
</div>
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
    isRequired: Boolean,
    placeholder: String,
    options: [],
    validationErrorMessage: String,
    isFormSubmitted: Boolean,
  },
  watch: {
    name(val) {
      if (val) {
        this.selected = val;
      }
    },
    watch: {
    isFormSubmitted(value) {
      this.hasFormBeenSubmitted = value;

      if (value) {
        this.isInputValid = true;
      }
    },
  },
  },
  data() {
    return {
      // selected: this.options[0]
      selected:'',
      isInputValid: true,
      hasFormBeenSubmitted: false,
    };
  },
  
  methods: {
    onInput(event) {

      this.isInputValid = true;
      this.$emit('update:modelValue', event.target.value);
    },
    reset() {
      this.selected = "";
      this.isInputValid = true;
    },
  },
};
</script>
