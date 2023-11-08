<template>
  <!-- <input
    class="mb-3 rounded-[4px] border p-3 hover:outline-none focus:outline-none  hover:border-green-200 h-10 w-72 sm:text-sm"
    :type="type" :placeholder="placeholder"  :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)" /> -->
    <div class="mb-3">
    
    <input
      :class="{
        'rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-green-200 h-10 w-72 sm:text-sm': true,
        
      }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-red-500" v-if="!modelValue && isRequired">{{ StatusErrorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    id: String,
    groupId: String,
    type: String,
    label: String,
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
    StatusErrorMessage:String
  },
  model: {
    prop: "value",
    event: "update"
  }
};
</script>

