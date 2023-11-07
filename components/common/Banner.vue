<template>
     <section class="" v-if="isSectionVisible">
  <div class="flex items-center justify-between gap-x-6  px-6 py-3.5 sm:pr-2.5 lg:pl-8 " style="background-color: #5DB8AD;">
    <p class="text-sm leading-6 text-white">
      <a href="#">
        <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"></svg>{{title}}&nbsp;&nbsp;<strong class="font-semibold">{{ boldSub_title }}</strong>&nbsp;<span aria-hidden="true">&rarr;</span>
      </a>
    </p>
    <div class="flex items-center justify-center">
    <NuxtLink to=""
    v-if="isButtonVisible"       class="lg:inline-flex lg:w-auto w-full px-5 py-1 mr-5  rounded text-white items-center justify-center bg-white bg-opacity-25 border border-white hover:bg-white hover:border hover:border-white hover:bg-opacity-25 hover:text-white" >
            <span> Allow All</span>
          </NuxtLink>
          <a  class="text-white" data-te-alert-dismiss aria-label="Close" @click="hideSection">
          <span class="[&>svg]:h-6 [&>svg]:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </a>
        </div>
  </div>
</section>
</template>
<script>

export default {
  name: "banner",
  props:{
    title:"",
    boldSub_title:"",
    isButtonVisible: true
  },
 
  data() {
    return {
      isSectionVisible: true, 
      isButtonVisible: false
    };
  },
  created() {
   
    this.isButtonVisible = true;
  },
  methods: {
    hideSection() {
      this.isSectionVisible = false; 
    },
  },
}
</script>
