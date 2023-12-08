<template>
     <div v-if="isSectionVisible" class="flex justify-center fixed bottom-2 left-1/2 transform -translate-x-1/2 px-2">
    <div @click="scrollToTop" class="bg-green-50 text-black-200 p-2 rounded-full shadow-md h-20 w-60 flex items-center">
      <img src="~assets/images/cookie.png" alt="Image Description" class="mx-2 h-6 w-6" />
      <span class="text-element text-md">This website uses Cookies</span>
      <i id="dismiss-cookie" class="fa fa-times close-icon ml-2" @click="hideSection"></i>
    </div>
  </div>
  </template>
  
  <script>
  export default {
   
 
  data() {
    return {
      isSectionVisible: true,
    };
  },
    methods: {
      scrollToTop() {
        // Implement scrolling to the top of the page here
        // window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      hideSection() {
      this.isSectionVisible = false;
    },
    },
  };
  </script>