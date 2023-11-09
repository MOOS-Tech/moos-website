<template>
   
        <button :id="id" class=" flex items-center  text-sm font-bold  px-5 bg-green-200  border border-green-200 transition duration-300 rounded-md h-12 w-45 hover:bg-green-300   hover:text-white">
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