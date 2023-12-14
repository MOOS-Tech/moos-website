<template>
     <div v-if="isSectionVisible" class="flex justify-center fixed bottom-2 left-1/2 transform -translate-x-1/2 px-2">
    <div @click="scrollToTop" class="bg-green-50 text-black-200 p-2 rounded-full shadow-md h-15 w-60 flex items-center">
      <i alt="Image Description" :class="'fa-solid fa-' + icon + ' mx-2 fa-lg text-white'"></i>
      <span class="text-element text-md">{{ paragraph }}</span>
      <i id="dismiss-cookie" class="fa fa-times close-icon ml-2" @click="hideSection"></i>
     
    </div>
  </div>
  </template>
  
  <script>
  import {getBanner} from "../../services/navigation";
  export default {
   
 
  data() {
    return {
      isSectionVisible: true,
      paragraph:"",
      icon:""
    };
  },
  async mounted() {
    try {
      let res = await getBanner(2);
  
   
      this.paragraph = res.Paragraph,
      this.icon = res.font_awsome_Icon_name
     
     
      const isBannerVisible = localStorage.getItem('cookies_allowed') !== 'YES';
      console.log(isBannerVisible)
      this.isSectionVisible = isBannerVisible;

    } catch (e) {
      this.isSectionVisible = false;
    }
  },
    methods: {
      scrollToTop() {
        // Implement scrolling to the top of the page here
        // window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      hideSection() {
      this.isSectionVisible = false;
      localStorage.setItem('cookies_allowed', 'YES');
    },
    },
  };
  </script>