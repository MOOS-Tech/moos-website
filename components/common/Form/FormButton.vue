<template>
   
        <button :id="id" class=" items-center py-4 text-sm font-bold text-white px-7 bg-green-200   transition duration-300 rounded-md h-12 w-45">
        <template v-if="isLoading">
           
            <span class="text-small text-white">Loading...</span>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </button>
    </template>
    
    <script>
    /* eslint-disable no-console */
    export default {
        name: "FormButton",
        props: {
            id: String,
            type: {
                default: "button",
                type: String,
            },
            title: {
                default: "Button",
                type: String,
            },
            size: {
                default: "md",
                type: String,
            },
         
            to: {
                default: null,
                type: String,
            },
           
            isDisabled: {
                default: false,
                type: Boolean,
            },
            isLoading: {
                default: false,
                type: Boolean,
            },
        },
    };
    </script>
    
    <style scoped>
   
    </style>