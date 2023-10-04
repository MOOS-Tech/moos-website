<template>
   
        <button :id="id" class="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
        <template v-if="isLoading">
            <b-spinner small class="mr-2" variant="light"></b-spinner>
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